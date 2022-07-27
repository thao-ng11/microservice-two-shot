from pyexpat import model
from django.db import models

class BinVO(models.Model):
    closet_name = models.CharField(max_length=100)
    bin_number = models.PositiveSmallIntegerField()
    bin_size = models.PositiveSmallIntegerField()    

class Shoe(models.Model):
    manufacturer = models.CharField(max_length=30)
    model_name = models.CharField(max_length=30)
    color = models.CharField(max_length=30)
    picture_url = models.URLField(max_length=100, null=True)

    bin = models.models.ForeignKey(
        BinVO,
        related_name='bins', 
        on_delete=models.PROTECT
     )