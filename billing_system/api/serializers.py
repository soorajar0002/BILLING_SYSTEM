from accounts.models import Account
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["id","first_name", "last_name", "email", "phone_number","password","is_buyer","is_vendor","is_active"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        if validated_data["is_buyer"]:
            user = Account(
                first_name=validated_data["first_name"],
                last_name=validated_data["last_name"],
                email=validated_data["email"],
                phone_number=validated_data['phone_number'],
                username=validated_data['email'].split('@')[0],
             )
            user.is_buyer = True
            user.set_password(validated_data["password"])
            user.is_active = True
            user.save()
  
        else:
            user = Account(
               first_name=validated_data["first_name"],
               last_name=validated_data["last_name"],
               email=validated_data["email"],
               phone_number=validated_data["phone_number"],
               username=validated_data["email"].split("@")[0],
        )
            user.is_vendor = True
            user.set_password(validated_data["password"])
            user.is_active = True
            user.save()
       
        return user

class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Account
        fields = ['id', 'first_name', 'last_name', 'email','phone_number','username','token','is_superadmin','is_vendor','is_buyer','is_active']
    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)