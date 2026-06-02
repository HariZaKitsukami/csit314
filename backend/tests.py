from django.test import TestCase

# Create your tests here.
from backend.migrations.models import services, models;

class scoreTestCase(TestCase)
    def setUp(self):
        candidate1 = CandidateProfile.objects.create(full_name = "", phone = "" ,education = "bachelors", major = "computer science", experience = 2, location = "Wollongong", preferred_work_mode = "remote");
        candidate2 = CandidateProfile.objects.create(full_name = "", phone = "" ,education = "bachelors", major = "computer science", experience = 2, location = "Wollongong", preferred_work_mode = "remote");
        employer1 = EmployerProfile.objects.create(company_name ="", location = "Wollongong", description = "")
        job1 = JobListing.objects.create(employer_id = employer1.user_id, job_title = "",required_education = "bachelors",required_skills = "", required_experience = 2, work_mode = "Remote", job_location = "Wollongong", salary = "60.00", benefits = "");
    def testAssertEqual(self):
        self.assertEqual(services.cal_match_score(candidate1, job1), 30);
        self.assertEqual(services.cal_match_score(candidate2, job2), 20);
