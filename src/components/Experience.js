
import React, { useState, useEffect } from "react";

function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experiences = [
    {
      title: "Jr. Software Development Engineer (Jr. SDE)",
      company: "Numeric Infosystem Pvt. Ltd., Gwalior (M.P)",
      duration: "2025 – Ongoing",
      details: [
        "Responsible for developing and maintaining web applications.",
        "Developed 10+ REST APIs, improving backend efficiency.",
        "Designed overall architecture of web applications.",
        "Developed full-stack applications using MERN stack for small and large-scale projects.",
        "Committed to maintain quality along with deadlines.",
      ],
    },
  ];

  return (
    <section
      style={{
        paddingTop: isMobile ? "100px" : "120px",
        paddingBottom: isMobile ? "50px" : "70px",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "#0f172a",
        color: "white",
      }}
      id="experience"
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "30px" : "50px",
          color: "#3b82f6",
          fontSize: isMobile ? "28px" : "36px",
        }}
      >
        Experience
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              backgroundColor: "#1e293b",
              padding: isMobile ? "20px" : "30px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              transition: "0.4s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(59,130,246,0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform =
                  "translateY(0px) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.4)";
              }
            }}
          >
            <h3
              style={{
                marginBottom: "10px",
                color: "#3b82f6",
                textAlign: "center",
                fontSize: isMobile ? "18px" : "22px",
              }}
            >
              {exp.title}
            </h3>

            <h4
              style={{
                marginBottom: "10px",
                textAlign: "center",
                color: "#cbd5e1",
                fontWeight: "500",
                fontSize: isMobile ? "15px" : "18px",
              }}
            >
              {exp.company}
            </h4>

            <p
              style={{
                textAlign: "center",
                color: "#94a3b8",
                marginBottom: "15px",
                fontStyle: "italic",
                fontSize: isMobile ? "13px" : "15px",
              }}
            >
              {exp.duration}
            </p>

            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: isMobile ? "15px" : "20px",
                color: "#cbd5e1",
              }}
            >
              {exp.details.map((point, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "8px",
                    fontSize: isMobile ? "13px" : "15px",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;







// import React from "react";

// function Experience() {
//   const experiences = [
//     {
//       title: "Jr. Software Development Engineer (Jr. SDE)",
//       company: "Numeric Infosystem Pvt. Ltd., Gwalior (M.P)",
//       duration: "2025 – Ongoing",
//       details: [
//         "Responsible for developing and maintaining web applications.",
//         "Developed 10+ REST APIs, improving backend efficiency.",
//         "Designed overall architecture of web applications.",
//         "Developed full-stack applications using MERN stack for small and large-scale projects.",
//         "Committed to maintain quality along with deadlines.",
//       ],
//     },
//   ];

//   return (
//     <section
//       style={{
//         paddingTop: "120px", // to prevent overlap with fixed navbar
//         paddingBottom: "70px",
//         paddingLeft: "20px",
//         paddingRight: "20px",
//         backgroundColor: "#0f172a",
//         color: "white",
//       }}
//       id="experience"
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "50px",
//           color: "#3b82f6",
//         }}
//       >
//         Experience
//       </h2>

//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "auto",
//         }}
//       >
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             style={{
//               width: "100%", // full width of container
//               backgroundColor: "#1e293b",
//               padding: "30px",
//               borderRadius: "16px",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
//               transition: "0.4s",
//               cursor: "pointer",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
//               e.currentTarget.style.boxShadow =
//                 "0 15px 40px rgba(59,130,246,0.5)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0px) scale(1)";
//               e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
//             }}
//           >
//             <h3
//               style={{
//                 marginBottom: "10px",
//                 color: "#3b82f6",
//                 textAlign: "center",
//               }}
//             >
//               {exp.title}
//             </h3>
//             <h4
//               style={{
//                 marginBottom: "10px",
//                 textAlign: "center",
//                 color: "#cbd5e1",
//                 fontWeight: "500",
//               }}
//             >
//               {exp.company}
//             </h4>
//             <p
//               style={{
//                 textAlign: "center",
//                 color: "#94a3b8",
//                 marginBottom: "15px",
//                 fontStyle: "italic",
//               }}
//             >
//               {exp.duration}
//             </p>
//             <ul
//               style={{
//                 listStyleType: "disc",
//                 paddingLeft: "20px",
//                 color: "#cbd5e1",
//               }}
//             >
//               {exp.details.map((point, i) => (
//                 <li key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Experience;








 