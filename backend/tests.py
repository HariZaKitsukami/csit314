from django.test import TestCase

# Create your tests here.
from backend.models import User, CandidateProfile, EmployerProfile, JobListing;
from backend.services import cal_match_score, search_jobs;

class testCase(TestCase):
    def setUp(self):
        user1 = User.objects.create(role = "cand", is_member = False);
        candidate1 = CandidateProfile.objects.create(user_id = user1, full_name = "", phone = "" ,education = "bachelors", major = "computer science", experience = 2, location = "Wollongong", preferred_work_mode = "remote");
        candidate2 = CandidateProfile.objects.create(user_id = user1, full_name = "", phone = "" ,education = "bachelors", major = "computer science", experience = 3, location = "Wollongong", preferred_work_mode = "remote");
        employer1 = EmployerProfile.objects.create(user_id = user1, company_name ="", location = "Wollongong", description = "")
        job1 = JobListing.objects.create(employer_id = employer1, job_title = "computer programmer", job_description = "programming the computers", required_education = "bachelors",required_skills = "",  work_mode = "Remote", job_location = "Wollongong", salary = "60.00", benefits = "");
        job1 = JobListing.objects.create(employer_id = employer1, job_title = "database programmer", job_description = "coding the database",required_education = "bachelors",required_skills = "",  work_mode = "Remote", job_location = "Wollongong", salary = "60.00", benefits = "");
    def testScoreCase(self):
        self.assertEqual(cal_match_score(candidate1, job1), 30);
        self.assertEqual(cal_match_score(candidate1, job2), 20);
    def testSearchJobs(self):
        jobList = search_jobs(keyword = "computer programmer");
        sel.assertEqual(jobList[0], job1);
