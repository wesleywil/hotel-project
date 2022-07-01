from django.urls import path

from .views import (
    UserViewSet,
    UserDetailsView,
    BookingViewSet,
    BookingDetailsView,
)

app_name = 'accounts_api'

urlpatterns = [
    path('users/', UserViewSet.as_view(), name='list_user'),
    path('users/<int:pk>', UserDetailsView.as_view(), name='detail_user'),
    path('bookings/', BookingViewSet.as_view(), name='list_booking'),
    path('bookings/<int:pk>', BookingDetailsView.as_view(), name='detail_booking'),
]