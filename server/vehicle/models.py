from django.db import models
import uuid


class Product(models.Model):
    SEAT = [
        ("s4", "4 chỗ"),
        ("s7", "7 chỗ"),
        ("s16", "16 chỗ"),
        ("s19", "19 chỗ"),
        ("s24", "24 chỗ"),
        ("s35", "35 chỗ"),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, max_length=50)
    name = models.CharField(max_length=200)
    segment = models.CharField(max_length=100, choices=SEAT, default=SEAT[0])
    rental = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    describe = models.CharField(max_length=400)
    area = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    image = models.ImageField(upload_to="images/", null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False, blank=True)

    def __str__(self):
        return self.name
