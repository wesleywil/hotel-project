from django.db import models


class Residence(models.Model):
    title = models.CharField(max_length=250, null=False, blank=False)
    location = models.CharField(max_length=250, null=False, blank=False)
    address = models.CharField(max_length=500, null=False, blank=False)
    room_quantity = models.IntegerField(default=0, null=False, blank=False)

    class Type(models.TextChoices):
        HOTEL = 'Hotel'
        READ = 'Cabin'
    
    type = models.CharField(max_length=6, choices=Type.choices)
    rooms = models.ManyToManyField('Room', related_name='rooms_in_residence')

    def __str__(self):
        return self.location

class Room(models.Model):
    residence = models.ForeignKey(Residence, on_delete=models.CASCADE, related_name='room_from_residence')
    decription = models.TextField()
    room_id = models.CharField(max_length=10, null=False, blank=False)

    class Room_bed(models.TextChoices):
        SINGLE = 'Single Bed'
        DOUBLE = 'Double Bed'
        COUPLE = 'Couple Bed'
    
    room_bed = models.CharField(max_length=10, choices=Room_bed.choices)
    daily_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    vip = models.BooleanField(default = False)
    extra_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, default=0.00)

    def __str__(self):
        return f'{self.residence.location} {self.room_id} '