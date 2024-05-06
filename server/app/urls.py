from django.urls import path
from .views import *



urlpatterns = [
      path('signup/',user_sign_up,name="User_Sign_Up"),
]