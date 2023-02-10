from django.urls import path,include
from sales.views import OrderDetailsList,OrderItemList,VendorBillingView

from vendor.views import ProductView
from .views import MyTokenObtainPairView,RegisterView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    # path('',views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='token_refresh'),
    path('products/', ProductView.as_view(), name='token_refresh'),
    path('order_details/', OrderDetailsList.as_view(), name='order_details'),
    path('order_items/', OrderItemList.as_view(), name='order_item'),
    path('vendor_billing_system/', VendorBillingView.as_view(), name='vendor_bill'),

]
