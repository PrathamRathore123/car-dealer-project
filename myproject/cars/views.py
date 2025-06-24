from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Car
from .serializers import CarSerializer
from rest_framework.permissions import AllowAny


def token_required(func):
    def wrapper(self, request, *args, **kwargs):
        if request.method == 'POST':
            auth_header = request.headers.get('Authorization')
            if not auth_header or not auth_header.startswith('Bearer '):
                return Response({'detail': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)
            token = auth_header.split(' ')[1]
            if token != '12345abc':
                return Response({'detail': 'Invalid token.'}, status=status.HTTP_401_UNAUTHORIZED)
        return func(self, request, *args, **kwargs)
    return wrapper


class CarListCreateAPIView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    @token_required
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
