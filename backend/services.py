from .models import(
    User,
    CandidateProfile,
    EmployerProfile, 
    JobListing,
    Application,
    Skill
    # candidateSkill,
    # jobSkill,
    # Recommendation
    
)

def search_jobs(keyword = None, location = None, work_mode = None, skill = None): #def filters
    jobs = JobListing.objects.all()

    if keyword:
        jobs = jobs.filter(job_title__iexact=keyword)

    if location:
        jobs = jobs.filter(job_location__icontains=location)

    if work_mode:
        jobs = jobs.filter(work_mode__iexact=work_mode)

    if skill:
        jobs = jobs.filter(required_skills__iexact = skill)

    return jobs

def search_candidates(keyword = None, location = None, education = None):#, #skill = None): #def filters
    candidates = CandidateProfile.objects.all()


    if keyword:
        candidates = candidates.filter(full_name__iexact=keyword)

    if education:
        candidates = candidates.filter(location__icontains=education)

    if education:
        candidates = candidates.filter(education__iexact= education)

    

def cal_match_score(candidate, job): #plce holder.
    score = 0

    if candidate.education == job.required_education:
        if candidate.education.lower() == str(job.required_education).lower():
            score += 10

    # if candidate.experience >= job.required_experience:
    #     score += 10
    #we dont have job.required_exp at the moment

    if candidate.location.lower() == job.job_location.lower():
        score += 10

    if candidate.preferred_work_mode and job.work_mode:
        if candidate.preferred_word_mode.lower() == job.work_mode.lower():
            score += 10
    
    return score

def get_match_jobs(candidate_id):
    candidate = CandidateProfile.objects.get(id = candidate_id)
    jobs = JobListing.objects.all()

    matches = []

    for job in jobs:
        score = cal_match_score(candidate, job)
        matches.append((job, score))

    matches.sort(key=lambda x: x[1], reverse=True)
    return matches

#get mat candidates
def get_recom_candidates(job_id):
    job = JobListing.objects.get(id = job_id)

    candidates = CandidateProfile.objects.all()

    matches = []
    
    for candidate in candidates:
        score = cal_match_score(candidate, job)
        matches.append((candidate, score))

    matches.sort(key=lambda x: x[1], reverse=True)
    return matches

#get candidates applications
def get_candidate_app(candidate_id):
    return Application.objects.filter(candidate_id = candidate_id)  

# get job applications
def get_job_app(job_id):
    return Application.objects.filter(job_id = job_id)


# apply fgor job
def apply_job(candidate_id, job_id):

    existing_app = Application.objects.filter(
        candidate_id = candidate_id,
        job_id = job_id
    ).first()

    if existing_app:
        return existing_app

    candidate = CandidateProfile.objects.get(id = candidate_id)
    job = JobListing.objects.get(id = job_id)

    application = Application.objects.create(
        candidate = candidate_id,
        job = job_id
    )

    return application



#update application status
def update_app_status(application_id, new_status):
    application = Application.objects.get(id = application_id)
    application.status = new_status
    application.save()

    return application
    
