 api_locations, api_bin, api_bins


urlpatterns = [
    path("locations/", api_locations, name="api_locations"),
    path("locations/<int:pk>/", api_location, name="api_location"),
    path("bins/", api_bins, name="api_bins"),
    path("bins/<int:pk>/", api_bin, name="api_bin"),
]
