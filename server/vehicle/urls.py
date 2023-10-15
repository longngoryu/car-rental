from django.urls import path
from .views import ProductApiView, ProductDetailApiView
urlpatterns = [
    path("products/", ProductApiView.as_view()),
    path("products/<str:product_id>/", ProductDetailApiView.as_view()),
]
