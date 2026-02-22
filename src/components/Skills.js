import React from "react";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Tailwind CSS"],
      color: "#3b82f6", // blue accent
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io"],
      color: "#16a34a", // green accent
    },
    {
      category: "Database & Tools",
      items: ["MongoDB", "MySQL", "Git & GitHub", "Postman", "Docker"],
      color: "#f59e0b", // amber accent
    },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#0f172a",
        color: "white",
        borderRadius: "12px",
        margin: "40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
      id="skills"
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
          color: "#3b82f6",
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {skills.map((box, index) => (
          <div
            key={index}
            style={{
              width: "320px",
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
              color: "white",
              cursor: "pointer",
              boxShadow: `0 8px 25px rgba(0,0,0,0.4)`,
              transform: "rotate(0deg)",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) rotate(-1deg) scale(1.05)";
              e.currentTarget.style.boxShadow = `0 20px 50px ${box.color}50`; // colored shadow
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px) rotate(0deg) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                color: box.color,
                textAlign: "center",
                fontSize: "22px",
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
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "500",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = box.color;
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#334155";
                    e.currentTarget.style.transform = "scale(1)";
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
//       items: [
//         "HTML5",
//         "CSS3",
//         "JavaScript",
//         "React.js",
//         "Redux",
//         "Tailwind CSS",
//       ],
//     },
//     {
//       category: "Backend",
//       items: [
//         "Node.js",
//         "Express.js",
//         "REST APIs",
//         "JWT",
//         "Socket.io",
//       ],
//     },
//     {
//       category: "Database & Tools",
//       items: [
//         "MongoDB",
//         "MySQL",
//         "Git & GitHub",
//         "Postman",
//         "Docker",
//       ],
//     },
//   ];

//   return (
//     <section
//       style={{
//         padding: "70px 20px",
//         backgroundColor: "#0f172a", // same dark outer background
//       }}
//      id="skills"

//     >
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "50px",
//           color: "white",
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
//               transition: "0.4s",
//               cursor: "pointer",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform =
//                 "translateY(-10px) scale(1.03)";
//               e.currentTarget.style.boxShadow =
//                 "0 15px 40px rgba(59,130,246,0.5)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform =
//                 "translateY(0px) scale(1)";
//               e.currentTarget.style.boxShadow =
//                 "0 8px 25px rgba(0,0,0,0.4)";
//             }}
//           >
//             <h3
//               style={{
//                 marginBottom: "20px",
//                 color: "#3b82f6",
//                 textAlign: "center",
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
