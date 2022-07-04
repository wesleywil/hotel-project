from django.http import Http404
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer


import random

from .models import Residence, Room
from .serializers import (
    ResidencesSerializers,
    RoomsSerializers,
    ErrorSerializer,
)

# List Residences and Create new Residence Register
class ResidenceViewSet(APIView):
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly,]
    def get(self, request, format=None):
        queryset = Residence.objects.all().order_by('-title')
        serializer = ResidencesSerializers(queryset, many=True, context={"request":request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ResidencesSerializers(data=request.data, context={"request":request})
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
        serializer = ResidencesSerializers(residence, context={"request": request})
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

# Search Residences by Location
class ResidenceByLocationView(APIView):
    permissions = [permissions.AllowAny]

    def get(self,request, location, format=None):
        residence = Residence.objects.filter(location__icontains = location)
        if not residence:
            content ={
                "message":"Nothing was found",
                "status":status.HTTP_404_NOT_FOUND
            }
            serializer = ErrorSerializer(content)
            return Response(serializer.data)
        else:
            serializer = ResidencesSerializers(residence, context = {"request": request}, many=True)
            return Response(serializer.data)

# 3 Random Residences
class ResidenceByRandom3View(APIView):
    permissions = [permissions.AllowAny]

    def get(self, request, format=None):
        residences_list = list(Residence.objects.all())
        print(f'RESIDENCE LIST COUNT {len(residences_list)}')
        if len(residences_list) >= 3:
            residences = random.sample(residences_list, 3)
            print(f'Residences Sample {residences}')
            serializer = ResidencesSerializers(residences, context={"request": request}, many=True)
            return Response(serializer.data)
        else:
            content = {
                "message":"Not Enough Posts",
                "status":status.HTTP_204_NO_CONTENT
            }
            serializer = ErrorSerializer(content)
            return Response(serializer.data)
        

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
