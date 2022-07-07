from rest_framework import serializers

from .models import User, Booking
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

class UserSerializer(serializers.ModelSerializer):
    list_booking = BookingSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'profile_picture', 'first_name', 'last_name', 'email','list_booking')
