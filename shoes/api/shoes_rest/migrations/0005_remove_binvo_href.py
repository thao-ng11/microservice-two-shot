# Generated by Django 4.0.3 on 2022-07-27 20:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0004_binvo_href'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='binvo',
            name='href',
        ),
    ]
