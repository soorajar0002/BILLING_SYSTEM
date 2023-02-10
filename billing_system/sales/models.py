from django.db import models
from accounts.models import Account
from vendor.models import Product
# Create your models here.

    
class OrderDetails(models.Model):
    buyer = models.ForeignKey(Account,on_delete=models.CASCADE,related_name='buyer')
    vendor = models.ForeignKey(Account,on_delete=models.CASCADE,related_name='vendor')
    order_total = models.FloatField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    
class OrderItem(models.Model):
    order = models.ForeignKey(OrderDetails,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.IntegerField()
    total_price = models.FloatField()
    def __str__(self):
        return self.product.product_name