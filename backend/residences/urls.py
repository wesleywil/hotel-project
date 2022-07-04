from django.urls import path

from .views import (
    ResidenceViewSet,
    ResidenceDetailsView,
    ResidenceByLocationView,
    ResidenceByRandom3View,
    RoomViewSet,
    RoomDetailsView,
)

app_name = 'residences_api'

urlpatterns = [
    path('residences/', ResidenceViewSet.as_view(), name='list_residence'),
    path('residences/<int:pk>', ResidenceDetailsView.as_view(), name='detail_residence'),
    path('residences/<location>',ResidenceByLocationView.as_view(), name='locate_residence'),
    path('residences/all/random',ResidenceByRandom3View.as_view(), name='random_residence'),
    path('rooms/', RoomViewSet.as_view(), name='list_rooms'),
    path('rooms/<int:pk>', RoomDetailsView.as_view(), name='detail_room'),
]