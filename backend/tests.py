from django.test import TestCase

# Create your tests here.
from backend.migrations.models import services;
from ui-prototype-joe-/frontend import jobMatchingClasses;

class scoreTestCase(TestCase)
    def setUp(self):
        candidate1 = CandidateProfile("", "bachelors", "computer science", 2, "remote", "Wollongong" );
        candidate2 = CandidateProfile("", "bachelors", "computer science", 1, "in-person", "Wollongong");
        job1 = JobListing("", "", "bachelors", "", 2, "Remote", "Wollongong");
    def testAssertEqual(self):
        self.assertEqual(services.cal_match_score(candidate1, job1), 30);
        self.assertEqual(services.cal_match_score(candidate2, job2), 20);
