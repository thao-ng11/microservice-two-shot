from pyexpat import model
from django.db import models

class BinVO(models.Model):
    import_href = models.CharField(max_length=200, default='')

class Shoe(models.Model):
    manufacturer = models.CharField(max_length=30)
    model_name = models.CharField(max_length=30)
    color = models.CharField(max_length=30)
    picture_url = models.URLField(max_length=200, null=True)

    bin = models.ForeignKey(
        BinVO,
        related_name='bin', 
        on_delete=models.PROTECT
     )