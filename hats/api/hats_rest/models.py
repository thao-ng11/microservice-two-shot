from django.db import models

class LocationVO (models.Model):
    closet_name = models.CharField(max_length=100)
    section_number = models.PositiveSmallIntegerField()
    shelf_number = models.PositiveSmallIntegerField()

class Hat(models.Model):
    fabric= models.CharField(max_length=100)
    style_name= models.CharField(max_length=100)
    color= models.CharField(max_length=100)
    picture_url= models.URLField(null=True)
    location= models.ForeignKey(
        LocationVO,
        related_name= "locations",
        on_delete= models.PROTECT,
    )
