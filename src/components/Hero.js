import React from "react";


function Hero() {
  return (
    <div
      style={{
        border: "4px solid #3b82f6",
        borderRadius: "12px",
        margin: "40px",
        padding: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          color: "white",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          {/* LEFT SIDE - TEXT */}
          <div style={{ flex: "1 1 500px" }}>
            <h1
              style={{
                fontSize: "52px",
                marginBottom: "15px",
              }}
            >
              Hi, I'm Kush Meena
            </h1>

            <p
              style={{
                fontSize: "22px",
                marginBottom: "25px",
                color: "#cbd5e1",
              }}
            >
              Full Stack Developer | React • Node • MySQL • JavaScript .CSS
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <a
                href="#projects"
                style={{
                  padding: "14px 28px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  display: "inline-block",
                  transition: "0.3s",
                }}
              >
                View My Work
              </a>

              <a
                href="/KushMeena_Resume.pdf" // "/" points to public folder
                download
                style={{
                  padding: "14px 28px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  display: "inline-block",
                  transition: "0.3s",
                }}
              >
                Download Resume
              </a>

            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div style={{ flex: "1 1 400px", textAlign: "center" }}>
            <img
              src="/developer.png"
              alt="Kush Meena"
              style={{
                width: "520px",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(59,130,246,0.4)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
