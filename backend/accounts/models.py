from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.db.models.signals import pre_save
from decimal import Decimal
from datetime import timedelta,date

from residences.models import Room, Residence
 

class User(AbstractUser):
    profile_picture = models.ImageField(upload_to='profiles/', default='profiles/default_profile.jpg')
    list_booking = models.ManyToManyField('Booking', related_name='booking_user_list', blank=True)

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='user_booking')
    room = models.ForeignKey(Room, on_delete=models.CASCADE, null=True, blank=True)
    start_booking = models.DateField(auto_now_add=True)
    end_booking = models.DateField(null=True, blank=True)
    days = models.IntegerField(null=False, blank=False)
    total = models.DecimalField(max_digits=10, default=0.00,decimal_places=2, null=False, blank=False)
    open = models.BooleanField(default=False)


    def __str__(self):
        return f'Booked By: {self.user.username.upper()} Room: {self.room} '

    def calculate_total(self, save = False):
        if not self.room:
            return {}
        days = self.days
        daily_price = self.room.daily_price
        if self.room.vip == True:
            vip_price = Decimal("%.2f" %(self.room.extra_price))
            total = (daily_price + vip_price) * days
            total = Decimal("%.2f" %(total))
            totals = {
                "total": total
            }
        else:
            total = daily_price * days
            total = Decimal("%.2f" %(total))
            totals = {
                "total": total
            }
        for k,v in totals.items():
            setattr(self, k, v)
            if save == True:
                self.save()
        return totals
    
    def handle_pre_save_residence_vacancy(self, save = False):
        residence = Residence.objects.get(id = self.room.residence.id)
        if not residence.vacancy:
            print('NO MORE ROOMS')
            raise Exception('Closed to new Bookings')
        else:
            xp = 0
            for rooms in residence.rooms.all():
                if rooms.vacancy == True:
                    xp +=1
                else:
                    if xp >=1:
                        print('Still Open')
                    else:
                       raise ValidationError(('No More Rooms'))
            # if Room.objects.filter(vacancy = True).exists():
            #     print('There are more rooms to choose!')
            # else:
            #     residence.vacancy = False
            #     residence.save()

    # def handle_post_save_residence_vacancy(self, save = False):
    #     if Room.objects.filter(vacancy = True).exists():
    #         print('yes')
    #     else:
    #         self.delete()


    def handle_end_booking(self, save = False):
        self.end_booking = date.today() + timedelta(days = self.days)
        print(f'END BOOKING ==> {self.end_booking}')
        if save == True:
            self.save()
        return self.end_booking
    
def booking_pre_save(sender, instance, *args, **kwargs):
    instance.calculate_total(save = False)
    instance.handle_end_booking(save = False)
    instance.handle_pre_save_residence_vacancy(save = False)

# def booking_post_save(sender, instance, *args, **kwargs):
#     instance.handle_post_save_residence_vacancy(save = False)
    
pre_save.connect(booking_pre_save, sender = Booking)
# post_save.connect(booking_post_save, sender = Booking)






 
