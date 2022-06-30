from rest_framework import serializers

from .models import Residence, Room

class ResidencesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Residence
        fields = ('id','title', 'location', 'address', 'room_quantity','type', 'rooms')

class RoomsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'residence', 'description', 'room_id','room_bed', 'daily_price', 'vip', 'extra_price')
        