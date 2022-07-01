from django.urls import path

from .views import (
    ResidenceViewSet,
    ResidenceDetailsView,
    RoomViewSet,
    RoomDetailsView,
)

app_name = 'residences_api'

urlpatterns = [
    path('residences/', ResidenceViewSet.as_view(), name='list_residence'),
    path('residences/<int:pk>', ResidenceDetailsView.as_view(), name='detail_residence'),
    path('rooms/', RoomViewSet.as_view(), name='list_rooms'),
    path('rooms/<int:pk>', RoomDetailsView.as_view(), name='detail_room'),
]