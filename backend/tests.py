from django.test import TestCase

# Create your tests here.
from backend.models import User, CandidateProfile, EmployerProfile, JobListing;
from backend.services import cal_match_score, search_jobs, get_job_details, search_candidates, get_cand_profile, get_match_jobs;

class testCase(TestCase):
    def setUp(self):
        user1 = User.objects.create(role = "cand", is_member = False);
        self.candidate1 = CandidateProfile.objects.create(user_id = user1, full_name = "Bruce Wayne", phone = "" ,education = "1", major = "computer science", experience = 2, location = "Wollongong", preferred_work_mode = "remote");
        self.candidate2 = CandidateProfile.objects.create(user_id = user1, full_name = "Clark Kent", phone = "" ,education = "2", major = "computer science", experience = 3, location = "Wollongong", preferred_work_mode = "remote");
        employer1 = EmployerProfile.objects.create(user_id = user1, company_name ="", location = "Wollongong", description = "")
        self.job1 = JobListing.objects.create(employer_id = employer1, job_title = "computer programmer", job_description = "programming the computers", required_education = 1,required_skills = "",  work_mode = "Remote", job_location = "Wollongong", salary = "60.00", benefits = "");
        self.job2 = JobListing.objects.create(employer_id = employer1, job_title = "database programmer", job_description = "coding the database",required_education = 2,required_skills = "",  work_mode = "in-person", job_location = "Wollongong", salary = "60.00", benefits = "");
        
    def testScoreCase(self):
        self.assertEqual(cal_match_score(self.candidate1, self.job1), 20);
        self.assertEqual(cal_match_score(self.candidate1, self.job2), 10);
    def testSearchJobs(self):
        jobList = search_jobs(keyword = "computer programmer");
        self.assertEqual(jobList[0], self.job1);
    def testGetJobDetails(self):
        self.assertEqual(self.job1, get_job_details(self.job1.pk));
    def testSearchCandidates(self):
        candidateList = search_candidates(keyword = "Clark Kent");
        self.assertEqual(self.candidate2, candidateList[0])
    def testGetCandProfile(self):
        self.assertEqual(self.candidate1, get_cand_profile(self.candidate1.pk));
    def testMatchJobs(self):
        jobList = [(self.job1, 20), (self.job2, 10)];
        self.assertEqual(get_match_jobs(self.candidate1.pk), jobList);
