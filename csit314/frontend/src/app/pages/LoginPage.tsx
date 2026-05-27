import { useState } from "react";
import { useNavigate } from "react-router";

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (email === "candidate@test.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      alert("Wrong username or password");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#2c5f9e",
          color: "white",
          padding: "12px 24px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px" }}>
          Job Matching System
        </h1>
      </header>

      {/* Login Box */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 50px)",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "32px",
            width: "100%",
            maxWidth: "380px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "8px",
              fontSize: "20px",
            }}
          >
            Candidate Login
          </h2>

          <p
            style={{
              margin: "0 0 24px 0",
              color: "#666",
              fontSize: "14px",
            }}
          >
            Sign in to your account
          </p>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Username / Email
              </label>

              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            {/* Password */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            {/* Login Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#2c5f9e",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>

          {/* Forgot Password */}
          <div
            style={{
              marginTop: "16px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#2c5f9e",
                textDecoration: "none",
              }}
            >
              Forgot password?
            </a>
          </div>

          {/* Create Account */}
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            <span style={{ color: "#666" }}>
              Don't have an account?{" "}
            </span>

            <a
              href="/register"
              style={{
                color: "#2c5f9e",
                textDecoration: "none",
              }}
            >
              Create account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}