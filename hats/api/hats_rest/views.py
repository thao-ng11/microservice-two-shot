from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from django.http import JsonResponse
from .models import Hat, LocationVO
import json

class LocationVOEncoder(ModelEncoder):
    model= LocationVO
    properties= [
        "closet_name", 
        "section_number", 
        "shelf_number",
        "import_href",
    ]

class HatListEncoder(ModelEncoder):
    model = Hat
    properties= [
        "fabric",
        "style_name", 
        "color", 
        "picture_url",
        "id",
        ]


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style_name",
        "color",
        "picture_url",
        "location",
    ]
    encoders={"location": LocationVOEncoder()}




@require_http_methods(["GET", "POST"])
def api_hats(request, location_vo_id=None):
    """
    Collection RESTful API handler for Hat objects in Location

    GET:
    Returns a dictionary with a single key "hats" which is a list of properties

    POST:
    Create a hat resource and returns its details
    """

    if request.method == "GET":
        hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )

    else: 
        content= json.loads(request.body)
        try:
            # location_href = f"api/locations/{location_vo_id}/"
            location = LocationVO.objects.get(import_href=content["location"])
            content["location"] = location

        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": " Invalid location id"}, 
                status =400,
            )
            
        hat= Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe= False,
        )

@require_http_methods(["GET", "DELETE"])
def api_hat(request, pk):
    """
    Single-object API for the Hat resource.

    

    DELETE:
    Removes the hat resource from the application
    """
    if request.method == "GET":
        hat= Hat.objects.get(id=pk)
        return JsonResponse(
            hat,
            encoder= HatDetailEncoder,
            safe= False,
        )

    else:
        try: 
            hat= Hat.objects.get(id=pk)
            hat.delete()
            return JsonResponse(
                hat,
                encoder= HatDetailEncoder,
                safe= False,
            )
        except Hat.DoesNotExist:
            response= JsonResponse({"message": "No longer exist"})
            return response

