"""
URL configuration for csit314 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from backend import views

urlpatterns = [
    path('admin/', admin.site.urls),
   # path("", include("frontend.urls")),
    #path("backend", include("backend.urls")),

    #jobs
    path("api/jobs/", views.jobs_list, name="jobs_list"),
    path("api/jobs/search/", views.jobs_search, name="jobs_search"),



    #Candidates
    path("api/candidates/search", views.candidates_search, name="candidates_search"),

    



    #recomendations
    path("api/candidates/<int:candidate_id>/recommended-jobs/",
         views.recommend_jobs,
         name="recommend_jobs",
    ),

    path("api/jobs/<int:job_id>/recommended-candidates/",
         views.recommended_candidates,
         name="recommended_candidates"
    ),






    #applications
path(
    "api/candidates/<int:candidate_id>/applications/",
    views.candidate_applications,
    name="candidate_applications"
),


path(
    "api/jobs/<int:job_id>/applications/",
    views.job_applications,
    name="job_applications"
),

path(
    "api/jobs/<int:job_id>/apply",
    views.apply_to_job,
    name="applt_to_job"
),















]
