from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import pre_save
from decimal import Decimal

from residences.models import Residence

class User(AbstractUser):
    profile_picture = models.ImageField(upload_to='profiles/', default='profiles/default_profile.jpg')
    list_booking = models.ForeignKey('Booking', on_delete=models.CASCADE, null=True, blank=True)

class Booking(models.Model):
    residence = models.ForeignKey(Residence, on_delete=models.CASCADE, null=False, blank=False)
    start_booking = models.DateField(auto_now_add=True)
    end_booking = models.DateField(null=False, blank=False)
    days = models.IntegerField(null=False, blank=False)
    total = models.CharField(max_length=30, null=False, blank=False)
    open = models.BooleanField(default=False)

    def calculate_total(self, save = False):
        if not self.residence:
            return {}
        days = self.days
        daily_price = self.residence.room.daily_price
        vip_price = Decimal(0.00)
        if self.residence.room.vip == True:
            vip_price = Decimal("%.2f" %(self.residence.room.extra_price))
            total = (daily_price + vip_price) * days
            total = Decimal("%.2f" %(total))
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
        if save == True:
            self.room_quantity - 1
            self.save()



def booking_pre_save(sender, instance, *args, **kwargs):
    instance.calculate_total(save = False)
    instance.handle_room_quantity(save = False)

pre_save.connect(booking_pre_save, sender = Booking)






