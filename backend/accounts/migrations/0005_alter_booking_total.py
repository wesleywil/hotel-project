# Generated by Django 3.2 on 2022-06-30 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_auto_20220630_1508'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='total',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
    ]