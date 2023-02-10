from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("product_name","price","vendor","id")
    def create(self, validated_data):
        request = self.context.get("request")
        user = request.user
        print(user)
        
        product = Product.objects.create(
            vendor=request.user,
            product_name=validated_data["product_name"],
            price = validated_data["price"]
        )
        product.save()
        return product