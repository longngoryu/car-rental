# Generated by Django 4.2.5 on 2023-10-15 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehicle', '0002_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.UUIDField(default='24f1f', editable=False, primary_key=True, serialize=False),
        ),
    ]
