from django.db import models
from accounts.models import Account
from vendor.models import Product
# Create your models here.
class OrderItem(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.IntegerField()
    total_price = models.FloatField()
    
    
class OrderDetails(models.Model):
    buyer = models.ForeignKey(Account,on_delete=models.CASCADE,related_name='buyer')
    vendor = models.ForeignKey(Account,on_delete=models.CASCADE,related_name='vendor')
    order_items = models.ManyToManyField(OrderItem)
    order_total = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def get_total(self):
        total = 0
        for order_item in self.order_items.all():
            total += order_item.total
        return total