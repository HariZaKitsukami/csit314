import backend.views
from django.urls import path

urlpatterns = [
    path("login", backend.views.login, name="backend/login"),
    path("register", backend.views.register, name="backend/register")
]
