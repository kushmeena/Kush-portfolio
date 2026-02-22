import React, { useState, useEffect } from "react";

function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        margin: isMobile ? "20px" : "60px",
        padding: "3px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #3b82f6, #9333ea)",
      }}
    >
      <div
        id="contact"
        style={{
          padding: isMobile ? "50px 15px" : "80px 20px",
          textAlign: "center",
          backgroundColor: "#0f172a",
          color: "white",
          borderRadius: "14px",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "26px" : "40px",
            marginBottom: isMobile ? "30px" : "40px",
            letterSpacing: "1px",
            color: "#3b82f6",
          }}
        >
          Contact Me
        </h2>

        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            padding: isMobile ? "20px" : "30px",
            borderRadius: "12px",
            backgroundColor: "#1e293b",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          {/* Email */}
          <div
            style={{
              fontSize: isMobile ? "15px" : "18px",
              marginBottom: "20px",
              color: "#cbd5e1",
            }}
          >
            📧 Email:{" "}
            <a
              href="mailto:kushmeena73@gmail.com"
              style={{
                color: "#3b82f6",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              kushmeena73@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div
            style={{
              fontSize: isMobile ? "15px" : "18px",
              marginBottom: "20px",
              color: "#cbd5e1",
            }}
          >
            📱 Phone:{" "}
            <a
              href="tel:+917049420663"
              style={{
                color: "#3b82f6",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              +91 7049420663
            </a>
          </div>

          {/* LinkedIn */}
          <div
            style={{
              fontSize: isMobile ? "15px" : "18px",
              marginBottom: "20px",
              color: "#cbd5e1",
            }}
          >
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/kush-meena-08a027300/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#3b82f6",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View Profile
            </a>
          </div>

          {/* GitHub */}
          <div
            style={{
              fontSize: isMobile ? "15px" : "18px",
              color: "#cbd5e1",
            }}
          >
            🐙 GitHub:{" "}
            <a
              href="https://github.com/kushmeena"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#3b82f6",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Visit Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;









// import React from "react";

// function Contact() {
//   return (
//     <div
//       style={{
//         margin: "60px",
//         padding: "3px",
//         borderRadius: "16px",
//         background: "linear-gradient(135deg, #3b82f6, #9333ea)",
//       }}
//     >
//       <div
//         id="contact"
//         style={{
//           padding: "80px 20px",
//           textAlign: "center",
//           backgroundColor: "#0f172a",
//           color: "white",
//           borderRadius: "14px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "40px",
//             marginBottom: "40px",
//             letterSpacing: "1px",
//              color: "#3b82f6",
//           }}
//         >
//           Contact Me
//         </h2>

//         <div
//           style={{
//             maxWidth: "500px",
//             margin: "0 auto",
//             padding: "30px",
//             borderRadius: "12px",
//             backgroundColor: "#1e293b",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//           }}
//         >
//           {/* Email */}
//           <div style={{ fontSize: "18px", marginBottom: "20px", color: "#cbd5e1" }}>
//             📧 Email:{" "}
//             <a
//               href="mailto:kushmeena73@gmail.com"
//               style={{
//                 color: "#3b82f6",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               kushmeena73@gmail.com
//             </a>
//           </div>

//           {/* Phone */}
//           <div style={{ fontSize: "18px", marginBottom: "20px", color: "#cbd5e1" }}>
//             📱 Phone:{" "}
//             <a
//               href="tel:+917049420663"
//               style={{
//                 color: "#3b82f6",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               +91 7049420663
//             </a>
//           </div>

//           {/* LinkedIn */}
//           <div style={{ fontSize: "18px", marginBottom: "20px", color: "#cbd5e1" }}>
//             💼 LinkedIn:{" "}
//             <a
//               href="https://www.linkedin.com/in/kush-meena-08a027300/"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color: "#3b82f6",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               View Profile
//             </a>
//           </div>

//           {/* GitHub */}
//           <div style={{ fontSize: "18px", color: "#cbd5e1" }} id="contact">
//             🐙 GitHub:{" "}
//             <a
//               href="https://github.com/kushmeena"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color: "#3b82f6",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Visit Profile
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
