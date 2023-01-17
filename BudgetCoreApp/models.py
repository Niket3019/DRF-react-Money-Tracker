from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class UserProfile(models.Model):
      user = models.OneToOneField(User,on_delete=models.CASCADE)
      first_name = models.CharField(max_length=50,default='')
      last_name = models.CharField(max_length=50,default='')
      phone = models.CharField(max_length=50,default='')
      city = models.CharField(max_length=50,default='')
      def __str__(self):
            return self.first_name
class MoneysBudget(models.Model):
      user  = models.BigAutoField(primary_key=True)
      expenses_type =  models.CharField(max_length=50)
      spend_money = models.IntegerField(default=0)
      date = models.CharField(max_length=20,default=0)




class Expenses(models.Model):
    total_income=  models.IntegerField(default=0)

    
