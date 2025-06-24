from django.urls import path
from .views import CarListCreateAPIView
from .auth import LoginView

urlpatterns = [
    path('cars/', CarListCreateAPIView.as_view(), name='car-list-create'),
    path('login/', LoginView.as_view(), name='login'),
]
