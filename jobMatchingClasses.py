class CompanyAccount:
    def __init__(name, location):
        self.name = name;
        self.location = location;
class jobListing:
    def __init__(title, description, req_education_level, req_skills, req_years_experience, work_mode, location):
        self.title = title;
        self.description = description;
        self.req_education_level = req_education_level;
        self.work_mode = work_mode;
        self.location = location;
class CandidateAccount:
    def __init__(full_name, education, major, years_experience):
        self.full_name = full_name;
        self.education = education;
        self.major = major;
        self.years_experience = years_experience;
class Contact:
    def __init__(self, email, phone):
        self.email = email;
        self.phone = phone;
    def __str__(self):
        return self.email+","+self.phone;
if __name__ == '__main__':
    newContact = Contact("aidangreenlees@outlook.com", "428549243");
    print (newContact)
