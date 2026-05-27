from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

# Create your models here.
class User(models.Model):
    class Role(models.TextChoices):
        CANDIDATE = "cand", _("Candidate")
        EMPLOYER = "empl", _("Employer")
    
    email = models.TextField()
    password = models.TextField()
    role = models.CharField(max_length=4, choices=Role)
    is_member = models.BooleanField()
    created_at = models.DateTimeField(default=timezone.now)

class CandidateProfile(models.Model):
    user_id = models.ForeignKey(User, models.CASCADE)
    full_name = models.TextField()
    phone = models.TextField()
    education = models.TextField()
    major = models.TextField()
    experience = models.IntegerField()
    location = models.TextField()
    preferred_work_mode = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

class EmployerProfile(models.Model):
    user_id = models.ForeignKey(User, models.CASCADE)
    company_name = models.TextField()
    location = models.TextField()
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

class JobListing(models.Model):
    employer_id = models.ForeignKey(EmployerProfile, on_delete=models.CASCADE)
    job_title = models.TextField()
    job_description = models.TextField()
    required_education = models.TextField()
    required_education = models.IntegerField(default=0)
    required_skills = models.TextField()
    work_mode = models.TextField()
    job_location = models.TextField()
    # Salaries of up to $99,999,999.99 should be more than enough, right?
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    benefits = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

class Application(models.Model):
    candidate_id = models.ForeignKey(CandidateProfile, models.CASCADE)
    job_id = models.ForeignKey(JobListing, models.CASCADE)
    status = models.TextField(default="Pending")
    application_date = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

class Skill(models.Model):
    skill_name = models.TextField()
    category = models.TextField()
