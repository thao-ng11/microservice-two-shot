# Generated by Django 4.0.3 on 2022-07-27 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0006_alter_binvo_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='binvo',
            name='href',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='binvo',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
