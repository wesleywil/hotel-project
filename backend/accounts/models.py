from django.db import models
from django.contrib.auth.models import AbstractUser
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
    
    def handle_room_quantity(self, save = False):
        print(f'Before: {self.room.residence.room_quantity}')
        room_quantity = self.room.residence.room_quantity
        total_quantity = room_quantity - 1
        print(f'After Sub no saved ==> {total_quantity}')
        if total_quantity <= -1:
            residence = Residence.objects.get(id=self.room.residence.id)
            residence.vacancy = False
            residence.save()
            raise Exception("No more rooms to book!")
        else:
            residence = Residence.objects.get(id=self.room.residence.id)
            residence.room_quantity = total_quantity
            residence.save()
    
    def handle_end_booking(self, save = False):
        self.end_booking = date.today() + timedelta(days = self.days)
        print(f'END BOOKING ==> {self.end_booking}')
        if save == True:
            self.save()
        return self.end_booking
    
def booking_pre_save(sender, instance, *args, **kwargs):
    instance.calculate_total(save = False)
    instance.handle_end_booking(save = False)
    instance.handle_room_quantity(save = False)
    
pre_save.connect(booking_pre_save, sender = Booking)







