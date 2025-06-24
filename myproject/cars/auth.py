from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Hardcoded credentials and token
        if username == 'admin' and password == 'test123':
            return Response({'token': '12345abc'})
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
