from rest_framework import serializers
from .models import Product



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["vendor","product_name","price","id"]
    
            
    