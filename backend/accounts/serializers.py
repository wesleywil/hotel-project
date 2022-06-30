from rest_framework import serializers

from .models import User, Booking


class UserSerializer(serializers.ModelSerializer):
   class Meta:
        model = User
        fields = ('id', 'username', 'profile_picture', 'first_name', 'last_name', 'email','list_booking')

class BookingSerializer(serializers.ModelSeriazlier):
    class Meta:
        model = Booking
        fields = ('id', 'user', 'room', 'start_booking', 'end_booking', 'days', 'total', 'open')