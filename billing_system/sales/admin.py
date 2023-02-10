from django.contrib import admin
from .models import OrderDetails,OrderItem
# Register your models here.
admin.site.register(OrderItem)
admin.site.register(OrderDetails)