import React, { useState, useEffect } from "react";

function Skills() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Tailwind CSS"],
      color: "#3b82f6",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io"],
      color: "#16a34a",
    },
    {
      category: "Database & Tools",
      items: ["MongoDB", "MySQL", "Git & GitHub", "Postman", "Docker"],
      color: "#f59e0b",
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: isMobile ? "40px 15px" : "60px 20px",
        backgroundColor: "#0f172a",
        color: "white",
        borderRadius: "12px",
        margin: isMobile ? "20px" : "40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "30px" : "50px",
          color: "#3b82f6",
          fontSize: isMobile ? "26px" : "32px",
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "20px" : "30px",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {skills.map((box, index) => (
          <div
            key={index}
            style={{
              width: isMobile ? "100%" : "320px",
              backgroundColor: "#1e293b",
              padding: isMobile ? "20px" : "25px",
              borderRadius: "16px",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform =
                  "translateY(-12px) rotate(-1deg) scale(1.05)";
                e.currentTarget.style.boxShadow = `0 20px 50px ${box.color}50`;
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform =
                  "translateY(0px) rotate(0deg) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.4)";
              }
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                color: box.color,
                textAlign: "center",
                fontSize: isMobile ? "20px" : "22px",
              }}
            >
              {box.category}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {box.items.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#334155",
                    padding: isMobile ? "5px 12px" : "6px 14px",
                    borderRadius: "20px",
                    fontSize: isMobile ? "12px" : "13px",
                    fontWeight: "500",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.backgroundColor = box.color;
                      e.currentTarget.style.transform = "scale(1.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.backgroundColor = "#334155";
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;








// import React from "react";

// function Skills() {
//   const skills = [
//     {
//       category: "Frontend",
//       items: ["HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Tailwind CSS"],
//       color: "#3b82f6", // blue accent
//     },
//     {
//       category: "Backend",
//       items: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io"],
//       color: "#16a34a", // green accent
//     },
//     {
//       category: "Database & Tools",
//       items: ["MongoDB", "MySQL", "Git & GitHub", "Postman", "Docker"],
//       color: "#f59e0b", // amber accent
//     },
//   ];

//   return (
//     <section
//       style={{
//         padding: "60px 20px",
//         backgroundColor: "#0f172a",
//         color: "white",
//         borderRadius: "12px",
//         margin: "40px",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//       }}
//       id="skills"
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "50px",
//           color: "#3b82f6",
//         }}
//       >
//         Skills
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "30px",
//           flexWrap: "wrap",
//           maxWidth: "1200px",
//           margin: "auto",
//         }}
//       >
//         {skills.map((box, index) => (
//           <div
//             key={index}
//             style={{
//               width: "320px",
//               backgroundColor: "#1e293b",
//               padding: "25px",
//               borderRadius: "16px",
//               color: "white",
//               cursor: "pointer",
//               boxShadow: `0 8px 25px rgba(0,0,0,0.4)`,
//               transform: "rotate(0deg)",
//               transition: "all 0.4s ease",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-12px) rotate(-1deg) scale(1.05)";
//               e.currentTarget.style.boxShadow = `0 20px 50px ${box.color}50`; // colored shadow
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0px) rotate(0deg) scale(1)";
//               e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
//             }}
//           >
//             <h3
//               style={{
//                 marginBottom: "20px",
//                 color: box.color,
//                 textAlign: "center",
//                 fontSize: "22px",
//               }}
//             >
//               {box.category}
//             </h3>

//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "10px",
//                 justifyContent: "center",
//               }}
//             >
//               {box.items.map((skill, i) => (
//                 <span
//                   key={i}
//                   style={{
//                     backgroundColor: "#334155",
//                     padding: "6px 14px",
//                     borderRadius: "20px",
//                     fontSize: "13px",
//                     fontWeight: "500",
//                     transition: "all 0.3s",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = box.color;
//                     e.currentTarget.style.transform = "scale(1.1)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = "#334155";
//                     e.currentTarget.style.transform = "scale(1)";
//                   }}
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;



 