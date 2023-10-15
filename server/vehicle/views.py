from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer


class ProductApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        queryset = Product.objects.all()
        serializer = ProductSerializer(instance=queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = {
            "name": request.data.get("name"),
            "segment": request.data.get("segment"),
            "rental": request.data.get("rental"),
            "describe": request.data.get("describe"),
            "area": request.data.get("area"),
            "phone": request.data.get("phone"),
            "image": request.data.get("image"),
        }

        serializer = ProductSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, product_id, *args, **kwargs):
        try:
            print("--------------------")
            print(product_id)
            queryset = Product.objects.get(id=product_id)
            serializer = ProductSerializer(queryset, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response(
                {"res": "Object with product id does not exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    def put(self, request, product_id, *args, **kwargs):
        try:
            queryset = Product.objects.get(id=product_id)
            data = {
                "name": request.data.get("name"),
                "segment": request.data.get("segment"),
                "rental": request.data.get("rental"),
                "describe": request.data.get("describe"),
                "area": request.data.get("area"),
                "phone": request.data.get("phone"),
                "image": request.data.get("image"),
            }

            serializer = ProductSerializer(instance=queryset, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response(
                {"res": "Put with product id does not exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    def delete(self, request, product_id, *args, **kwargs):
        try:
            queryset = Product.objects.get(id=product_id)
            queryset.delete()
            return Response({"res": "Object deleted!"}, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response(
                {"res": "Delete with product id does not exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )
