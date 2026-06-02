from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


# Create your views here.
def login(request: HttpRequest) -> HttpResponse:
    
    return render(request, "login.htmlt", {})

def register(request: HttpRequest) -> HttpResponse:
    return render(request, "register.htmlt", {})

def dashboard(request: HttpRequest) -> HttpResponse:
    return render(request, "dashboard.htmlt", {})
