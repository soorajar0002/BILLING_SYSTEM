from django.urls import path,include

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
]
