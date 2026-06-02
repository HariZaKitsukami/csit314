from site import register_readline
from django.contrib.auth import authenticate, login as lin
from backend.models import User
from django.http import HttpRequest, HttpResponse, HttpResponseForbidden
from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
def login(request: HttpRequest) -> HttpResponse:
    if request.method != "POST":
        return HttpResponseForbidden("login must be a post request")
    user = authenticate(request, email=request.POST["email"], password=request.POST["password"])
    if user is not None:
        lin(request, user)
        return redirect("frontend/dashboard")
    else:
        return HttpResponseForbidden("invalid login details")

def register(request: HttpRequest) -> HttpResponse:
    if request.method != "POST":
        return HttpResponseForbidden("register must be a post request")
    user = User(email=request.POST["email"], first_name=request.POST["name"], is_member=True)
    user.set_password(request.POST["password"])
    user.save()
    lin(request, user)
    return redirect("dashboard")
