# Generated by Django 4.0.3 on 2022-07-27 21:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0007_binvo_href_alter_binvo_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='binvo',
            old_name='href',
            new_name='import_href',
        ),
        migrations.RemoveField(
            model_name='binvo',
            name='closet_name',
        ),
    ]