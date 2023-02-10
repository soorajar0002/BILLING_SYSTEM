from django.db import models
from accounts.models import Account
# Create your models here.

class Product(models.Model):
    vendor = models.ForeignKey(Account,on_delete=models.CASCADE)
    product_name = models.CharField(max_length=30)
    price = models.IntegerField(blank=True,null=True)
    
    

    def __str__(self):
        return self.product_name
    
