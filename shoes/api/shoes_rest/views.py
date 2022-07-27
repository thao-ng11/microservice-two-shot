from json import encoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Shoe, BinVO

class BinVOEncoder(ModelEncoder):
    model = BinVO
    properties = [
        'import_href',
    ]

class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = [
        'manufacturer',
        'model_name',
        'color',
        'picture_url',
        'bin',
        'id',
    ]
    encoders = {
        "bin": BinVOEncoder(),
    }

class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        'manufacturer',
        'model_name',
        'color',
        'picture_url',
        'bin',
    ]
    encoders = {
        "bin": BinVOEncoder(),
    }



@require_http_methods(['GET', 'POST'])
def api_shoes(request, bin_vo_id=None):
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
                encoder=ShoeListEncoder,
            )
    else:
        content = json.loads(request.body)
        try:
            import_href = content['bin']
            bin = BinVO.objects.get(import_href=import_href)
            print("HERE", bin, import_href)
            content['bin'] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin href"},
                status=400,
            )
        shoe = Shoe.objects.create(**content)
        return JsonResponse(
            shoe,
            encoder=ShoeDetailEncoder,
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
            encoder=ShoeDetailEncoder,
            safe=False
        )
    except Shoe.DoesNotExist:
        return JsonResponse({'message': 'Does not exist'})