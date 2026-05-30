import { useState } from "react";
import { useNavigate } from "react-router-dom";

const allJobs = [
  { id: 1, title: "Frontend Developer Intern", company: "UOW Careers", location: "Wollongong", type: "Internship", skills: ["React", "HTML", "CSS"] },
  { id: 2, title: "Data Analyst Assistant", company: "Sydney Data Group", location: "Sydney", type: "Part-time", skills: ["SQL", "Excel", "Python"] },
  { id: 3, title: "UI/UX Design Intern", company: "Wollongong Design Studio", location: "Wollongong", type: "Internship", skills: ["Figma", "Wireframing", "User Research"] },
  { id: 4, title: "Backend Developer", company: "Startup Hub", location: "Remote", type: "Full-time", skills: ["Node.js", "Python", "MongoDB"] },
  { id: 5, title: "Software Engineer Intern", company: "Sydney Tech Lab", location: "Sydney", type: "Internship", skills: ["Java", "Spring Boot", "MySQL"] },
  { id: 6, title: "IT Support Assistant", company: "Campus Support Centre", location: "Wollongong", type: "Part-time", skills: ["Networking", "Windows", "Troubleshooting"] },
];

export function JobListingPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterSkill, setFilterSkill] = useState("");

  const filteredJobs = allJobs.filter((job) => {
    const matchSearch =
      search === "" ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchType = filterType === "" || job.type === filterType;

    const matchLocation =
      filterLocation === "" ||
      job.location.toLowerCase().includes(filterLocation.toLowerCase());

    const matchSkill =
      filterSkill === "" ||
      job.skills.some((skill) => skill.toLowerCase().includes(filterSkill.toLowerCase()));

    return matchSearch && matchType && matchLocation && matchSkill;
  });

  const locations = [...new Set(allJobs.map((job) => job.location))];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", fontFamily: "sans-serif" }}>
      <header style={{
        backgroundColor: "#2c5f9e",
        color: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <h1 style={{ margin: 0, fontSize: "20px" }}>Job Matching System</h1>
        <nav style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/dashboard"); }} style={{ color: "white", textDecoration: "none" }}>Dashboard</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>My Applications</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Profile</a>
        </nav>
      </header>

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "24px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "22px" }}>Available Job Listings</h2>
          <button
            onClick={() => navigate("/dashboard")}
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
            Back to Dashboard
          </button>
        </div>

        <div style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "16px",
          marginBottom: "20px",
        }}>
          <div style={{ marginBottom: "14px" }}>
            <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>
              Search by job title or keyword
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. Developer, Intern, Python"
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
            <div style={{ flex: 1, minWidth: "140px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>Job Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "13px",
                  backgroundColor: "white",
                }}
              >
                <option value="">All Types</option>
                <option value="Internship">Internship</option>
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
                <option value="Casual">Casual</option>
              </select>
            </div>

            <div style={{ flex: 1, minWidth: "140px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>Location</label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "13px",
                  backgroundColor: "white",
                }}
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: 1, minWidth: "140px" }}>
              <label style={{ display: "block", fontSize: "13px", marginBottom: "4px", color: "#555" }}>Required Skill</label>
              <input
                type="text"
                value={filterSkill}
                onChange={(e) => setFilterSkill(e.target.value)}
                placeholder="e.g. Python, React"
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
        </div>

        <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
          Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""}
        </p>

        {filteredJobs.length === 0 ? (
          <div style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "32px",
            textAlign: "center",
            color: "#888",
            fontSize: "14px",
          }}>
            No jobs match your search or filters. Try adjusting your search.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "4px" }}>{job.title}</div>
                    <div style={{ fontSize: "13px", color: "#555", marginBottom: "2px" }}>{job.company}</div>
                    <div style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>{job.location}</div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{
                        backgroundColor: "#e8f0fe",
                        color: "#2c5f9e",
                        fontSize: "11px",
                        padding: "2px 8px",
                        borderRadius: "12px",
                      }}>
                        {job.type}
                      </span>
                      {job.skills.map((skill) => (
                        <span key={skill} style={{
                          backgroundColor: "#f0f0f0",
                          color: "#555",
                          fontSize: "11px",
                          padding: "2px 8px",
                          borderRadius: "12px",
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`View details for: ${job.title}`)}
                    style={{
                      padding: "7px 14px",
                      backgroundColor: "#2c5f9e",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      fontSize: "13px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      marginLeft: "16px",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}