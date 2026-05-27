import { useNavigate } from "react-router";

const recommendedJobs = [
  { id: 1, title: "Frontend Developer Intern", company: "Tech Solutions Sdn Bhd", location: "Kuala Lumpur", type: "Internship" },
  { id: 2, title: "Data Analyst (Part-time)", company: "DataCorp Malaysia", location: "Penang", type: "Part-time" },
  { id: 3, title: "UI/UX Designer Intern", company: "Creative Studio KL", location: "Kuala Lumpur", type: "Internship" },
  { id: 4, title: "Backend Developer", company: "StartupBase", location: "Remote", type: "Full-time" },
];

export function DashboardPage() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", fontFamily: "sans-serif" }}>
      {/* Header */}
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
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Dashboard</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>My Applications</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Profile</a>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              borderRadius: "4px",
              padding: "4px 12px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Logout
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "24px 16px" }}>

        {/* Welcome Message */}
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ margin: "0 0 4px 0", fontSize: "22px" }}>Welcome back, John!</h2>
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>Here's what's happening with your job search today.</p>
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

          {/* Left Column: Profile */}
          <div style={{ flex: "0 0 220px" }}>
            <div style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "20px",
              textAlign: "center",
            }}>
              {/* Avatar */}
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "#2c5f9e",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                margin: "0 auto 12px auto",
              }}>
                J
              </div>
              <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "4px" }}>John Doe</div>
              <div style={{ color: "#666", fontSize: "13px", marginBottom: "12px" }}>Computer Science, Year 3</div>

              <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "12px 0" }} />

              <div style={{ textAlign: "left", fontSize: "13px", color: "#555" }}>
                <div style={{ marginBottom: "6px" }}><strong>Email:</strong> john@university.edu</div>
                <div style={{ marginBottom: "6px" }}><strong>Skills:</strong> React, Python, SQL</div>
                <div><strong>Status:</strong> <span style={{ color: "green" }}>Open to work</span></div>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "12px 0" }} />

              <a href="#" style={{ fontSize: "13px", color: "#2c5f9e", textDecoration: "none" }}>Edit Profile</a>
            </div>
          </div>

          {/* Right Column: Jobs */}
          <div style={{ flex: 1, minWidth: "280px" }}>

            {/* Search Bar Row */}
            <div style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
            }}>
              <input
                type="text"
                placeholder="Search for jobs..."
                style={{
                  flex: 1,
                  padding: "8px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
              <button style={{
                padding: "8px 16px",
                backgroundColor: "#2c5f9e",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: "pointer",
              }}>
                Search Jobs
              </button>
            </div>

            {/* Recommended Jobs */}
            <div style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "16px",
            }}>
              <h3 style={{ margin: "0 0 14px 0", fontSize: "16px" }}>Recommended Jobs</h3>

              {recommendedJobs.map((job) => (
                <div
                  key={job.id}
                  style={{
                    borderBottom: "1px solid #eee",
                    paddingBottom: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "2px" }}>{job.title}</div>
                      <div style={{ color: "#555", fontSize: "13px" }}>{job.company}</div>
                      <div style={{ color: "#888", fontSize: "12px", marginTop: "2px" }}>{job.location}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                      <span style={{
                        backgroundColor: "#e8f0fe",
                        color: "#2c5f9e",
                        fontSize: "11px",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        whiteSpace: "nowrap",
                      }}>
                        {job.type}
                      </span>
                      <button style={{
                        fontSize: "12px",
                        padding: "4px 10px",
                        backgroundColor: "white",
                        border: "1px solid #2c5f9e",
                        color: "#2c5f9e",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ textAlign: "center", marginTop: "4px" }}>
                <a href="#" style={{ fontSize: "13px", color: "#2c5f9e", textDecoration: "none" }}>View all recommended jobs →</a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
