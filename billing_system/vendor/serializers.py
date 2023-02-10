from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("product_name","price","vendor")
    def create(self, validated_data):
        user = self.context.get("user")
        
        product = Product.objects.create(
            vendor=user,
            product_name=validated_data["product_name"],
            price = validated_data["price"]
        )
        product.save()
        return product