from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from django.http import JsonResponse
from .models import Hat
import json

class HatEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style_name",
        "color",
        "picture_url",
        "location",
    ]

@require_http_methods(["GET", "POST"])
def api_hats(request):
    """
    Collection RESTful API handler for Hat objects in Location

    GET:
    Returns a dictionary with a single key "hats" which is a list of properties

    POST:
    Create a hat resource and returns its details
    """

    if request.method == "GET":
        hats= Hat.objects.all()
        return JsonResponse(
            {"hats": hat},
            encoder=HatEncoder,
        )

    else: 
        content= json.loads(request.body)
        hat= Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatEncoder,
            safe= False,
        )

@require_http_methods("DELETE")
def api_hat(request, pk):
    """
    Single-object API for the Hat resource.

    DELETE:
    Removes the hat resource from the application
    """

    try: 
        hat= Hat.objects.get(id=pk)
        hat.delete()
        return JsonResponse(
            hat,
            encoder= HatEncoder,
            safe= False,
        )
    except Hat.DoesNotExist:
        response= JsonResponse({"message": "Does not exist"})
        response.status_code = 404
        return response

