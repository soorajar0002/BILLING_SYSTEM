from rest_framework import serializers
from .models import OrderDetails,OrderItem
from accounts.models import Account




class UserSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Account
        fields = "__all__"
   
class OrderItemSerializer(serializers.ModelSerializer):
    price=serializers.ReadOnlyField(source="product.price",read_only=True)
    name=serializers.ReadOnlyField(source="product.product_name",read_only=True)
    date=serializers.ReadOnlyField(source="order.created_at",read_only=True)
    first_name=serializers.ReadOnlyField(source="order.vendor.first_name",read_only=True)
    last_name=serializers.ReadOnlyField(source="order.vendor.last_name",read_only=True)
    total=serializers.ReadOnlyField(source="order.order_total",read_only=True)
    class Meta:
        model = OrderItem
        fields = ["name","order","product","quantity","total_price","price","date","first_name","last_name","total"]

class OrderDetailSerializer(serializers.ModelSerializer):
    vendor_first=serializers.ReadOnlyField(source="vendor.first_name",read_only=True)
    vendor_last=serializers.ReadOnlyField(source="vendor.last_name",read_only=True)
    
    class Meta:
        model = OrderDetails
        fields = ["buyer","vendor","order_total","created_at","id","vendor_first","vendor_last"]

