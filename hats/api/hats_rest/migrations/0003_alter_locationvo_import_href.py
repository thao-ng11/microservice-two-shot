# Generated by Django 4.0.3 on 2022-07-27 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0002_locationvo_import_href'),
    ]

    operations = [
        migrations.AlterField(
            model_name='locationvo',
            name='import_href',
            field=models.CharField(default='', max_length=300),
        ),
    ]