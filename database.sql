

-- user tbale for login details
CREATE TABLE User (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('candidate', 'employer')),
    is_member INTEGER DEFAULT 0,
    created_at TIME DEFAULT CURRENT_TIMESTAMP
);


-- profile for candidates
CREATE TABLE CandidateProfile(
    candidate_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    phone TEXT,
    education TEXT,
    major TEXT,
    experience INTEGER DEFAULT 0, 
    location TEXT,
    preferred_work_mode TEXT,
    created_at TIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);



-- employer profile 
CREATE TABLE EmployerProfile ( 
    employer_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL UNIQUE,
    company_name TEXT NOT NULL,
    location TEXT,
    description TEXT,
    created_at TIME DEFAULT CURRENT_TIMESTAMP,
    updated_at TIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);



-- table to hold job listingsa
CREATE TABLE JobListing (
    job_id INTEGER PRIMARY KEY AUTOINCREMENT,
    employer_id INTEGER NOT NULL,
    job_title TEXT NOT NULL,
    job_description TEXT NOT NULL,
    required_education TEXT,
    required_experience INTEGER DEFAULT 0,
    required_skills TEXT,
    work_mode TEXT,
    job_location TEXT,
    salary FLOAT,
    benefits TEXT,
    created_at TIME DEFAULT CURRENT_TIMESTAMP,
    updated_at TIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employer_id) REFERENCES EmployerProfile(employer_id)
) ;


-- candidate applications for job listings
CREATE TABLE Application (
    application_id INTEGER PRIMARY KEY AUTOINCREMENT,
    candidate_id INTEGER NOT NULL,
    job_id INTEGER NOT NULL,
    status TEXT DEFAULT 'Pending',
    application_date TIME DEFAULT CURRENT_TIMESTAMP,
    updated_at TIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES CandidateProfile(candidate_id),
    FOREIGN KEY (job_id) REFERENCES JobListing(job_id)
);


-- skills for recommendations
CREATE TABLE Skill (
    skill_id INTEGER PRIMARY KEY AUTOINCREMENT,
    skill_name TEXT NOT NULL,
    category TEXT
);


CREATE TABLE CandidateSkill (
    candidate_id INTEGER NOT NULL,
    skill_id INTEGER NOT NULL,
    PRIMARY KEY (candidate_id, skill_id),
    FOREIGN KEY (candidate_id) REFERENCES CandidateProfile(candidate_id),
    FOREIGN KEY (skill_id) REFERENCES Skill(skill_id)
);

CREATE TABLE JobSkill (
    job_id INTEGER NOT NULL,
    skill_id INTEGER NOT NULL,
    PRIMARY KEY (job_id, skill_id),
    FOREIGN KEY (job_id) REFERENCES JobListing(job_id),
    FOREIGN KEY (skill_id) REFERENCES Skill(skill_id)
);

CREATE TABLE Recommendation (
    recommendation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    recommended_role TEXT,
    recommended_item_id INTEGER,
    score INTEGER DEFAULT 0,
    created_at TIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);