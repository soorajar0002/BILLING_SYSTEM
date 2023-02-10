from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import OrderDetails, OrderItem
from .serializers import OrderDetailSerializer, OrderItemSerializer,UserSerializer
from accounts.models import Account
from vendor.models import Product

class OrderDetailsList(generics.ListAPIView):
    serializer_class = OrderDetailSerializer

    def get_queryset(self):
        user = self.request.user.id
        return OrderDetails.objects.filter(buyer=user)

    
class OrderItemList(APIView):
    def post(self,request):
        id = request.data["id"]
        order_detail = OrderDetails.objects.get(pk=id)
        items = OrderItem.objects.filter(order=order_detail)
        serializer = OrderItemSerializer(items,many=True)
        return Response(serializer.data)
    
class VendorBillingView(APIView):
    def get(self,request):
        users = Account.objects.filter(is_buyer=True)
        print(users)
        serializer = UserSerializer(users,many=True)
        return Response(serializer.data)
        