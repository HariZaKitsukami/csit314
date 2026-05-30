import { useState } from "react";
import { useNavigate } from "react-router";

export function ProfileCreationPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    workExperience: "",
    preferredJobType: "",
    availability: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    alert("Profile saved successfully!");
    navigate("/dashboard");
  }

  function handleCancel() {
    navigate("/dashboard");
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
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/dashboard"); }} style={{ color: "white", textDecoration: "none" }}>Dashboard</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>My Applications</a>
          <a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold", textDecoration: "underline" } as React.CSSProperties}>Profile</a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "700px", margin: "0 auto", padding: "32px 16px" }}>

        <h2 style={{ margin: "0 0 8px 0", fontSize: "22px" }}>Create Candidate Profile</h2>

        {/* Notice */}
        <div style={{
          backgroundColor: "#fff8e1",
          border: "1px solid #f0c040",
          borderRadius: "4px",
          padding: "10px 14px",
          fontSize: "13px",
          color: "#7a5c00",
          marginBottom: "20px",
        }}>
          <strong>Note:</strong> Candidates can only have one profile. Saving a new profile will replace the existing profile.
        </div>

        {/* Form */}
        <div style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "24px",
        }}>
          <form onSubmit={handleSave}>

            {/* Full Name */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Full Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                required
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

            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="e.g. john@university.edu"
                required
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

            {/* Phone */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 012-3456789"
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

            {/* Education */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Education
              </label>
              <input
                type="text"
                name="education"
                value={form.education}
                onChange={handleChange}
                placeholder="e.g. Bachelor of Computer Science, Year 3"
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

            {/* Skills */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="e.g. React, Python, SQL"
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

            {/* Work Experience */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Work Experience
              </label>
              <textarea
                name="workExperience"
                value={form.workExperience}
                onChange={handleChange}
                placeholder="Briefly describe any past work experience or internships..."
                rows={3}
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

            {/* Preferred Job Type */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Preferred Job Type
              </label>
              <select
                name="preferredJobType"
                value={form.preferredJobType}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  backgroundColor: "white",
                }}
              >
                <option value="">-- Select job type --</option>
                <option value="internship">Internship</option>
                <option value="part-time">Part-time</option>
                <option value="full-time">Full-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>

            {/* Availability */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>
                Availability
              </label>
              <input
                type="text"
                name="availability"
                value={form.availability}
                onChange={handleChange}
                placeholder="e.g. Available from June 2026, weekdays only"
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

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px" }}>
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
                Save Profile
              </button>
              <button
                type="button"
                onClick={handleCancel}
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
                Cancel
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}
