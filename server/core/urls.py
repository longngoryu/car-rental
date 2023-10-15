from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from vehicle import urls as vehicle_urls

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(vehicle_urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)