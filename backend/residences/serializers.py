from rest_framework import serializers

from .models import Residence, Room

class RoomsSerializers(serializers.ModelSerializer):
    residence = serializers.StringRelatedField() # __str__
    class Meta:
        model = Room
        fields = ('id', 'residence', 'decription', 'room_id','room_bed', 'daily_price', 'vip', 'extra_price')

class ResidencesSerializers(serializers.ModelSerializer):
    rooms = RoomsSerializers(many=True, read_only=True)
    class Meta:
        model = Residence
        fields = ('id','title', 'main_picture', 'description', 'location', 'address', 'room_quantity','type', 'rooms')
