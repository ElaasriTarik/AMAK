from django.db import models
from django.contrib.auth.hashers import make_password
# Create your models here.


class User(models.Model):
      name = models.CharField(max_length=50)
      email = models.EmailField(unique=True)
      password = models.CharField(max_length=20)
      phone_number = models.CharField(max_length=20)
      
      
      def __str__(self) -> str:
            return self.name
      class Meta:
            verbose_name_plural = "User"
            
            
      def hash_password(self,unsafe_password):
            self.password = make_password(unsafe_password)


class UserProfile(models.Model):
      user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
      profile_pics = models.ImageField(upload_to="img/")
      vehicle_information = models.TextField(blank=True,max_length=9999)
      
      def __str__(self) -> str:
            return self.user.name
      
      class Meta:
            verbose_name_plural = "UserProfile"
      
      