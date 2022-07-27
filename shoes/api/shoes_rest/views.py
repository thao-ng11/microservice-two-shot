from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Shoe

class ShoeEncoder(ModelEncoder):
    model = Shoe
    properties = [
        'manufacturer',
        'model_name',
        'color',
        'picture_url',
        'bin',
    ]

@require_http_methods(['GET', 'POST'])
def api_shoes(request):
    """
    Collection RESTful Api for Shoe objects in bins

    GET: returns dictionary with a key shoes 
    that returns the properties of shoes.

    POST: Creates a Shoe resource and returns its details

    """
    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeEncoder,
        )
    else:
        content = json.loads(request.body)
        shoe = Shoe.objects.create(**content)
        return JsonResponse(
            shoe,
            encode=ShoeEncoder,
            safe=False,
        )

@require_http_methods('DELETE')
def api_shoe(request, pk):
    """
    Single object API for the purpose of 
    deleting a shoe with its id
    """
    try:
        shoe = Shoe.objects.get(id=pk)
        shoe.delete()
        return JsonResponse(
            shoe,
            encoder=ShoeEncoder,
            safe=False
        )
    except Shoe.DoesNotExist:
        return JsonResponse({'message': 'Does not exist'})