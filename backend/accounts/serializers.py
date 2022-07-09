from rest_framework import serializers
from rest_framework.serializers import ValidationError

from .models import User, Booking
from residences.models import Room,Residence
from residences.serializers import RoomsSerializers



class BookingSerializer(serializers.ModelSerializer):
    room = RoomsSerializers(read_only=True)
    class Meta:
        model = Booking
        fields = ('id', 'user', 'room', 'start_booking', 'end_booking', 'days', 'total', 'open')

class SimpleBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('id','user','room','start_booking', 'end_booking', 'days', 'total', 'open')
    
    def validate(self, data):
        # residence = Residence.objects.get(rooms__id = data['room'])
        if Room.objects.filter(vacancy = True).exists():
            return data
        else:
            raise ValidationError('No More Rooms')


class UserSerializer(serializers.ModelSerializer):
    list_booking = BookingSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'profile_picture', 'first_name', 'last_name', 'email','list_booking')
