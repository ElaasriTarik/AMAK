from rest_framework.decorators import api_view , permission_classes , authentication_classes
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializers import *
from .models import User
from rest_framework import status


@api_view(["POST"])
def user_sign_up(req):
      userserializer = UserSerializer(data=req.data)
      if userserializer.is_valid():
            userserializer.save()
            user = User.objects.get(name=req.data["name"])
            user.hash_password(req.data["password"])
            user.save()
            token = Token.objects.create(user=user)
            return Response({token:token.key})
      return Response(userserializer.error_messages,status=status.HTTP_400_BAD_REQUEST)