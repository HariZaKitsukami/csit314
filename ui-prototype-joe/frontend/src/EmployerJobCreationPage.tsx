import { useState } from "react";
import { useNavigate } from "react-router-dom";

type JobListing = {
  id: number;
  title: string;
  company: string;
  description: string;
  education: string;
  skills: string;
  experience: string;
  workMode: string;
  location: string;
  salary: string;
  type: string;
};

export function EmployerJobCreationPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    education: "",
    skills: "",
    experience: "",
    workMode: "",
    location: "",
    salary: "",
    type: "",
  });

  const [createdJobs, setCreatedJobs] = useState<JobListing[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function resetForm() {
    setEditingId(null);
    setForm({
      title: "",
      company: "",
      description: "",
      education: "",
      skills: "",
      experience: "",
      workMode: "",
      location: "",
      salary: "",
      type: "",
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (editingId !== null) {
      setCreatedJobs(
        createdJobs.map((job) =>
          job.id === editingId ? { id: editingId, ...form } : job
        )
      );
      setEditingId(null);
      alert("Job listing updated successfully!");
    } else {
      const newJob: JobListing = {
        id: Date.now(),
        ...form,
      };

      setCreatedJobs([...createdJobs, newJob]);
      alert("Job listing created successfully!");
    }

    resetForm();
  }

  function handleEdit(job: JobListing) {
    setEditingId(job.id);
    setForm({
      title: job.title,
      company: job.company,
      description: job.description,
      education: job.education,
      skills: job.skills,
      experience: job.experience,
      workMode: job.workMode,
      location: job.location,
      salary: job.salary,
      type: job.type,
    });
  }

  function handleDelete(id: number) {
    setCreatedJobs(createdJobs.filter((job) => job.id !== id));
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

          <a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
            Create Job
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/employer/candidates");
            }}
            style={{ color: "white", textDecoration: "none" }}
          >
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
              Create Job Listing
            </h2>
            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
              Employers can create a new job listing. New listings will not replace previous listings.
            </p>
          </div>

          <button
            onClick={() => navigate("/employer/candidates")}
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
            View Candidates
          </button>
        </div>

        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "24px",
            marginBottom: "20px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Job Title <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Software Engineer"
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

              <div style={{ flex: 1, minWidth: "260px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Company Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Sydney Tech Lab"
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
            </div>

            <div style={{ marginTop: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Job Description <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter detailed job description..."
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "16px" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Required Education
                </label>
                <select
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                >
                  <option value="">-- Select education --</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor Degree">Bachelor Degree</option>
                  <option value="Master Degree">Master Degree</option>
                  <option value="No specific requirement">No specific requirement</option>
                </select>
              </div>

              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Required Experience
                </label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                >
                  <option value="">-- Select experience --</option>
                  <option value="Entry-level">Entry-level</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>

              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Work Mode
                </label>
                <select
                  name="workMode"
                  value={form.workMode}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                >
                  <option value="">-- Select work mode --</option>
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "16px" }}>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Required Skills
                </label>
                <input
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  placeholder="e.g. Python, Django, SQL"
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

              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Job Location
                </label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Sydney"
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
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "16px" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Salary Range
                </label>
                <input
                  name="salary"
                  value={form.salary}
                  onChange={handleChange}
                  placeholder="e.g. $60,000 - $80,000"
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

              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                  Job Type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                >
                  <option value="">-- Select job type --</option>
                  <option value="Internship">Internship</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Casual">Casual</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "22px" }}>
              <button
                type="submit"
                style={{
                  padding: "9px 20px",
                  backgroundColor: "#2c5f9e",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                {editingId === null ? "Create Listing" : "Save Changes"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                style={{
                  padding: "9px 20px",
                  backgroundColor: "white",
                  color: "#444",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        <h3 style={{ fontSize: "16px", marginBottom: "12px" }}>Created Job Listings</h3>

        {createdJobs.length === 0 ? (
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "24px",
              textAlign: "center",
              color: "#888",
              fontSize: "14px",
            }}
          >
            No job listings created yet.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {createdJobs.map((job) => (
              <div
                key={job.id}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "4px" }}>{job.title}</div>
                    <div style={{ fontSize: "13px", color: "#555", marginBottom: "4px" }}>{job.company}</div>
                    <div style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>{job.location}</div>

                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ backgroundColor: "#e8f0fe", color: "#2c5f9e", fontSize: "11px", padding: "2px 8px", borderRadius: "12px" }}>
                        {job.type || "No type"}
                      </span>
                      <span style={{ backgroundColor: "#f0f0f0", color: "#555", fontSize: "11px", padding: "2px 8px", borderRadius: "12px" }}>
                        {job.workMode || "No work mode"}
                      </span>
                      <span style={{ backgroundColor: "#f0f0f0", color: "#555", fontSize: "11px", padding: "2px 8px", borderRadius: "12px" }}>
                        {job.skills || "No skills"}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() => handleEdit(job)}
                      style={{
                        padding: "7px 12px",
                        backgroundColor: "white",
                        color: "#2c5f9e",
                        border: "1px solid #2c5f9e",
                        borderRadius: "4px",
                        fontSize: "13px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(job.id)}
                      style={{
                        padding: "7px 12px",
                        backgroundColor: "white",
                        color: "#b3261e",
                        border: "1px solid #b3261e",
                        borderRadius: "4px",
                        fontSize: "13px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
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
