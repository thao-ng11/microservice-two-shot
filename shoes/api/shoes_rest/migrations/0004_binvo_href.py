# Generated by Django 4.0.3 on 2022-07-27 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0003_remove_binvo_bin_number_remove_binvo_bin_size_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='binvo',
            name='href',
            field=models.CharField(default='', max_length=200, unique=True),
        ),
    ]
