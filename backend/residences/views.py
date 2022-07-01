from django.http import Http404
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Residence, Room
from .serializers import (
    ResidencesSerializers,
    RoomsSerializers,
)

# List Residences and Create new Residence Register
class ResidenceViewSet(APIView):
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly,]
    def get(self, request, format=None):
        queryset = Residence.objects.all().order_by('-title')
        serializer = ResidencesSerializers(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ResidencesSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

# Residence Details, Update Residence and Delete  Residence
class ResidenceDetailsView(APIView):
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly,]

    def get_object(self, pk):
        try:
            return Residence.objects.get(pk=pk)
        except Residence.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        residence = self.get_object(pk)
        serializer = ResidencesSerializers(residence)
        return Response(serializer.data)
    
    def put(self, request, pk, format = None):
        residence = self.get_object(pk)
        serializer = ResidencesSerializers(residence, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        residence = self.get_object(pk)
        residence.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

# List Rooms and Create new Room
class RoomViewSet(APIView):
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly,]
    def get(self, request, format=None):
        queryset = Room.objects.all()
        serializer = RoomsSerializers(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RoomsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

# Room Details, Update Room and Delete Room
class RoomDetailsView(APIView):
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly,]

    def get_object(self, pk):
        try:
            return Room.objects.get(pk=pk)
        except Room.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        room = self.get_object(pk)
        serializer = RoomsSerializers(room)
        return Response(serializer.data)
    
    def put(self, request, pk, format = None):
        room = self.get_object(pk)
        serializer = RoomsSerializers(room, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        room = self.get_object(pk)
        room.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
