import frontend.views
from django.urls import path

urlpatterns = [
    path("", frontend.views.login),
    path("register/", frontend.views.register),
    path("dashboard/", frontend.views.dashboard)
]
