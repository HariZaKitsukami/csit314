export function RegisterPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "sans-serif",
      }}
    >
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
            maxWidth: "400px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "8px",
              fontSize: "20px",
            }}
          >
            Create Account
          </h2>

          <p
            style={{
              margin: "0 0 24px 0",
              color: "#666",
              fontSize: "14px",
            }}
          >
            Create your candidate account
          </p>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
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

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Create password"
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

          <button
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
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}