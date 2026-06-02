import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Candidate = {
  id: number;
  name: string;
  education: string;
  skills: string[];
  experience: string;
  preferredMode: string;
  preferredLocation: string;
  matchScore: number;
};

const initialCandidates: Candidate[] = [
  {
    id: 1,
    name: "Alex Chen",
    education: "Bachelor Degree",
    skills: ["Python", "Django", "SQL"],
    experience: "1-2 years",
    preferredMode: "Hybrid",
    preferredLocation: "Sydney",
    matchScore: 94,
  },
  {
    id: 2,
    name: "Sarah Lee",
    education: "Master Degree",
    skills: ["Java", "Spring Boot", "MySQL"],
    experience: "3-5 years",
    preferredMode: "Remote",
    preferredLocation: "Melbourne",
    matchScore: 90,
  },
  {
    id: 3,
    name: "Michael Wong",
    education: "Bachelor Degree",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: "Entry-level",
    preferredMode: "On-site",
    preferredLocation: "Sydney",
    matchScore: 86,
  },
  {
    id: 4,
    name: "Emily Zhang",
    education: "Diploma",
    skills: ["Python", "Excel", "Data Analysis"],
    experience: "1-2 years",
    preferredMode: "Hybrid",
    preferredLocation: "Brisbane",
    matchScore: 84,
  },
  {
    id: 5,
    name: "David Smith",
    education: "Bachelor Degree",
    skills: ["Cyber Security", "Linux", "Networking"],
    experience: "3-5 years",
    preferredMode: "Remote",
    preferredLocation: "Sydney",
    matchScore: 82,
  },
  {
    id: 6,
    name: "Jason Brown",
    education: "Master Degree",
    skills: ["Machine Learning", "Python", "AI"],
    experience: "5+ years",
    preferredMode: "Hybrid",
    preferredLocation: "Canberra",
    matchScore: 80,
  },
  {
    id: 7,
    name: "Linda Park",
    education: "Bachelor Degree",
    skills: ["Agile", "Scrum", "Project Management"],
    experience: "3-5 years",
    preferredMode: "On-site",
    preferredLocation: "Sydney",
    matchScore: 78,
  },
  {
    id: 8,
    name: "Tom Wilson",
    education: "Diploma",
    skills: ["Figma", "CSS", "Web Design"],
    experience: "Entry-level",
    preferredMode: "Remote",
    preferredLocation: "Perth",
    matchScore: 76,
  },
  {
    id: 9,
    name: "Anna Liu",
    education: "Bachelor Degree",
    skills: ["SQLite", "Database", "SQL"],
    experience: "1-2 years",
    preferredMode: "Hybrid",
    preferredLocation: "Sydney",
    matchScore: 74,
  },
  {
    id: 10,
    name: "Kevin Zhao",
    education: "Master Degree",
    skills: ["Software Engineering", "Python", "Django"],
    experience: "3-5 years",
    preferredMode: "Remote",
    preferredLocation: "Melbourne",
    matchScore: 72,
  },
  {
    id: 11,
    name: "Grace Wang",
    education: "Bachelor Degree",
    skills: ["AWS", "DevOps", "Cloud Computing"],
    experience: "5+ years",
    preferredMode: "Hybrid",
    preferredLocation: "Sydney",
    matchScore: 70,
  },
];

export function CandidateDisplayPage() {
  const navigate = useNavigate();

  const [membership, setMembership] = useState("non-member");
  const [search, setSearch] = useState("");
  const [filterSkill, setFilterSkill] = useState("");
  const [filterEducation, setFilterEducation] = useState("");
  const [filterExperience, setFilterExperience] = useState("");
  const [filterMode, setFilterMode] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);

  function normaliseKeyword(keyword: string) {
    return keyword
      .toLowerCase()
      .replace("sofware", "software")
      .replace("enginer", "engineer")
      .replace("programmer", "software")
      .replace("coder", "software")
      .replace("pyton", "python");
  }

  const filteredCandidates = candidates
    .filter((candidate) => {
      const keyword = normaliseKeyword(search);
      const combinedText = normaliseKeyword(
        `${candidate.name} ${candidate.education} ${candidate.skills.join(" ")} ${candidate.experience} ${candidate.preferredMode} ${candidate.preferredLocation}`
      );

      const matchSearch = search === "" || combinedText.includes(keyword);

      const matchSkill =
        filterSkill === "" ||
        candidate.skills.some((skill) =>
          skill.toLowerCase().includes(filterSkill.toLowerCase())
        );

      const matchEducation =
        filterEducation === "" || candidate.education === filterEducation;

      const matchExperience =
        filterExperience === "" || candidate.experience === filterExperience;

      const matchMode =
        filterMode === "" || candidate.preferredMode === filterMode;

      const matchLocation =
        filterLocation === "" ||
        candidate.preferredLocation.toLowerCase().includes(filterLocation.toLowerCase());

      return (
        matchSearch &&
        matchSkill &&
        matchEducation &&
        matchExperience &&
        matchMode &&
        matchLocation
      );
    })
    .sort((a, b) => b.matchScore - a.matchScore);

  const displayedCandidates =
    membership === "non-member" ? filteredCandidates.slice(0, 10) : filteredCandidates;

  function handleDeleteCandidate(id: number) {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  }

  function resetFilters() {
    setSearch("");
    setFilterSkill("");
    setFilterEducation("");
    setFilterExperience("");
    setFilterMode("");
    setFilterLocation("");
    setMembership("non-member");
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", fontFamily: "sans-serif" }}>
      <header
        style={{
          backgroundColor: "#2c5f9e",
          color: "white",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px" }}>Job Matching System</h1>

        <nav style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/employer/create-job");
            }}
            style={{ color: "white", textDecoration: "none" }}
          >
            Create Job
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
            Candidates
          </a>
        </nav>
      </header>

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "24px 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div>
            <h2 style={{ margin: "0 0 4px 0", fontSize: "22px" }}>
              Candidate Profiles
            </h2>
            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
              Employers can search, filter, and view suitable candidate profiles.
            </p>
          </div>

          <button
            onClick={() => navigate("/employer/create-job")}
            style={{
              padding: "7px 14px",
              backgroundColor: "white",
              color: "#2c5f9e",
              border: "1px solid #2c5f9e",
              borderRadius: "4px",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Create Job
          </button>
        </div>

        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "16px",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginBottom: "14px" }}>
            <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>
              Keyword Search
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. Python, software engineer, data analyst"
              style={{
                width: "100%",
                padding: "8px 10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "150px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>
                Membership
              </label>
              <select
                value={membership}
                onChange={(e) => setMembership(e.target.value)}
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "13px",
                  backgroundColor: "white",
                }}
              >
                <option value="non-member">Non-member: Top 10 only</option>
                <option value="member">Member: Unlimited</option>
              </select>
            </div>

            <div style={{ flex: 1, minWidth: "150px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>
                Skill
              </label>
              <input
                type="text"
                value={filterSkill}
                onChange={(e) => setFilterSkill(e.target.value)}
                placeholder="e.g. Python"
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "13px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ flex: 1, minWidth: "150px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>
                Education
              </label>
              <select
                value={filterEducation}
                onChange={(e) => setFilterEducation(e.target.value)}
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "13px",
                  backgroundColor: "white",
                }}
              >
                <option value="">All</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor Degree">Bachelor Degree</option>
                <option value="Master Degree">Master Degree</option>
              </select>
            </div>

            <div style={{ flex: 1, minWidth: "150px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>
                Experience
              </label>
              <select
                value={filterExperience}
                onChange={(e) => setFilterExperience(e.target.value)}
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "13px",
                  backgroundColor: "white",
                }}
              >
                <option value="">All</option>
                <option value="Entry-level">Entry-level</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>

            <div style={{ flex: 1, minWidth: "150px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>
                Work Mode
              </label>
              <select
                value={filterMode}
                onChange={(e) => setFilterMode(e.target.value)}
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "13px",
                  backgroundColor: "white",
                }}
              >
                <option value="">All</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div style={{ flex: 1, minWidth: "150px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>
                Location
              </label>
              <input
                type="text"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                placeholder="e.g. Sydney"
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "13px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <button
              onClick={resetFilters}
              style={{
                padding: "7px 14px",
                backgroundColor: "white",
                color: "#444",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Reset Filters
            </button>
          </div>

          <div
            style={{
              backgroundColor: "#e8f0fe",
              color: "#2c5f9e",
              padding: "10px 12px",
              borderRadius: "4px",
              fontSize: "13px",
              marginTop: "16px",
            }}
          >
            {membership === "non-member"
              ? "Non-member employer: displaying Top 10 recommended candidates only."
              : "Member employer: displaying unlimited recommended candidates."}
          </div>
        </div>

        <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
          Showing {displayedCandidates.length} candidate{displayedCandidates.length !== 1 ? "s" : ""}.
          Results are sorted by match score.
        </p>

        {displayedCandidates.length === 0 ? (
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "32px",
              textAlign: "center",
              color: "#888",
              fontSize: "14px",
            }}
          >
            No candidates match your search or filters.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {displayedCandidates.map((candidate) => (
              <div
                key={candidate.id}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "4px" }}>{candidate.name}</div>
                    <div style={{ fontSize: "13px", color: "#555", marginBottom: "2px" }}>{candidate.education}</div>
                    <div style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                      {candidate.experience} · {candidate.preferredMode} · {candidate.preferredLocation}
                    </div>

                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {candidate.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            backgroundColor: "#f0f0f0",
                            color: "#555",
                            fontSize: "11px",
                            padding: "2px 8px",
                            borderRadius: "12px",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        fontSize: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      Match: {candidate.matchScore}%
                    </div>

                    <button
                      onClick={() => alert(`View profile for ${candidate.name}`)}
                      style={{
                        padding: "7px 14px",
                        backgroundColor: "#2c5f9e",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "13px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        marginBottom: "8px",
                      }}
                    >
                      View Profile
                    </button>

                    <br />

                    <button
                      onClick={() => handleDeleteCandidate(candidate.id)}
                      style={{
                        padding: "7px 14px",
                        backgroundColor: "white",
                        color: "#b3261e",
                        border: "1px solid #b3261e",
                        borderRadius: "4px",
                        fontSize: "13px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
