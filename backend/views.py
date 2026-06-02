#from site import register_readline
from django.contrib.auth import authenticate, login as lin
from backend.models import User
from django.http import HttpRequest, HttpResponse, HttpResponseForbidden, JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from .services import *


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

# Create your views here.
def jobs_list(request):
    jobs = search_jobs()

    data = []

    for job in jobs:
        data.append({
            #"id": job.id,
            "job_title": job.job_location,
            "job_location": job.job_location,
            "work_mode": job.work_mode,
        })
    
    return JsonResponse(data, safe=False)


def jobs_search(request):

    keyword = request.GET.get("keyword")
    location = request.GET.get("location")
    work_mode = request.GET.get("work_mode")
    data = []

    jobs = search_jobs(
        keyword=keyword,
        location=location,
        work_mode=work_mode
    )


    for job in jobs:
       data.append({
           #"id": job.id,
           "job_title": job.job_title,
           "job_location": job.job_location,
           "work_mode": job.work_mode,
       })
       
    return JsonResponse(data, safe=False)


def candidates_search(request):

    keyword = request.GET.get("keyword")
    location = request.GET.get("location")
    education = request.GET.get("education")

    candidates = search_candidates(
        keyword=keyword,
        location=location,
        education=education
    )

    data = []

    for candidate in candidates:
        data.append({
            "id": candidate.id,
            "name": candidate.full_name,
            "education": candidate.education,
            "location": candidate.location,
        })

    return JsonResponse(data, safe=False)


def recommended_candidates(request, job_id):

    matches = get_recom_candidates(job_id)

    data = []

    for candidate, score in matches:
        data.append({
            "candidate_id": candidate.id,
            "candidate_name": candidate.full_name,
            "score": score
        })

    return JsonResponse(data, safe=False)
