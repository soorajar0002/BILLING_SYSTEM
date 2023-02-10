from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from rest_framework import status
from .serializers import ProductSerializer


class ProductView(APIView):
    def get(self,request):
        products = Product.objects.filter(vendor=request.user)
        serializer = ProductSerializer(products,many=True)
        print(serializer)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)