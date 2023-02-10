from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import OrderDetails, OrderItem
from .serializers import OrderDetailSerializer, OrderItemSerializer,UserSerializer
from accounts.models import Account
from vendor.models import Product
from rest_framework import status

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
    
    def post(self,request):
        print(request.data)
        data = request.data["cart"]
        total = request.data["grand_total"]
        buyer_username = request.data["buyer_name"]
        buyer = Account.objects.get(username=buyer_username)
        product_id = [item['prod'][0]['id'] for item in data]
        product_price = [item['prod'][0]['price'] for item in data]
        quantities = [item['quantity'] for item in request.data['cart']]
        new_order = OrderDetails(buyer=buyer,vendor=request.user,order_total=total)
        new_order.save()
      
        for i in range(len(product_id)):
            product = Product.objects.get(pk=product_id[i])
            print(quantities[i])
            print(product_price[i])
            total_price = int(quantities[i])*product_price[i]
            print(total_price)
            new_item = OrderItem(order=new_order,product=product,quantity=quantities[i],total_price=total_price)
            new_item.save()
        return Response(status=status.HTTP_201_CREATED)
        