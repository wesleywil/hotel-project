from django.db import models

from PIL import Image

class Residence(models.Model):
    title = models.CharField(max_length=250, null=False, blank=False)
    main_picture = models.ImageField(upload_to='residences/', default='residences/default_house.png')
    description = models.TextField(max_length=300, default='default description, you should edit this')
    location = models.CharField(max_length=250, null=False, blank=False)
    address = models.CharField(max_length=500, null=False, blank=False)
    room_quantity = models.IntegerField(default=0, null=False, blank=False)
    vacancy = models.BooleanField(default=True)

    class Type(models.TextChoices):
        HOTEL = 'Hotel'
        CABIN = 'Cabin'
    
    type = models.CharField(max_length=6, choices=Type.choices)
    rooms = models.ManyToManyField('Room', related_name='rooms_in_residence', blank=True)

    def __str__(self):
        return self.location

    def save(self, *args, **kwargs):
        super().save()
        img = Image.open(self.main_picture.path)
        if img.height > 500 or img.width > 1100:
            new_img = (500,1100)
            img.thumbnail(new_img)
            img.save(self.main_picture.path)

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

class RoomImages(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE, null=True, blank=True)
    room_image = models.ImageField(upload_to='residences/', default='residences/default_bedroom.png')
    alt = models.CharField(max_length=50, null=True, blank=True)