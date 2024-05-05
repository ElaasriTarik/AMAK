from django.db import models

# Create your models here.


class User(models.Model):
      name = models.CharField(max_length=50)
      email = models.EmailField()
      phone_number = models.CharField(max_length=20)
      vehicle_information = models.TextField(blank=True,max_length=9999)
      
      def __str__(self) -> str:
            return self.name
      class Meta:
            verbose_name_plural = "User"
