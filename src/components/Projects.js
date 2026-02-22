
import React from "react";

function Projects() {
  const projects = [
    {
      title: "JobSpider",
      desc: "A job portal application with clean UI, search & filter, and backend integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/kushmeena",
    },
    {
      title: "RestroBuddy",
      desc: "Restaurant management system handling orders, menus, and inventory with responsive UI.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
      link: "https://github.com/kushmeena",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio website showcasing projects, skills, and contact information.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      link: "#",
    },
  ];

  return (
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#0f172a",
        color: "white",
        borderRadius: "12px",
        margin: "40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
      id="projects"
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "40px",
          color: "#3b82f6",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              width: "320px",
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
              color: "white",
              transition: "0.4s",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(59,130,246,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
            }}
          >
            <div>
              <h3
                style={{
                  marginBottom: "15px",
                  color: "#3b82f6",
                  textAlign: "center",
                }}
              >
                {project.title}
              </h3>
              <p style={{ marginBottom: "15px", color: "#cbd5e1" }}>
                {project.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "center",
                  marginBottom: "15px",
                }}
              >
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "#334155",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Centered Button */}
            <div style={{ textAlign: "center" }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  transition: "0.3s",
                }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;







// import { Paper, Box } from "@mui/material";

// function Projects() {
//   const projects = [
//     {
//       title: "Food Management System",
//       desc: "Responsive UI, API integration, dashboard interface.",
//     },
//     {
//       title: "JobSpider",
//       desc: "Dynamic job portal UI with search and filtering features.",
//     },
//   ];

//   return (
//     <div
//       style={{
//         border: "4px solid #3b82f6",
//         borderRadius: "12px",
//         margin: "40px",
//         padding: "20px",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//       }}
//       id="projects"
//     >
//       <div
//         id="projects"
//         style={{
//           padding: "80px 20px",
//           textAlign: "center",
//           backgroundColor: "#0f172a",
//           color: "white",
//           borderRadius: "10px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
//           Projects
//         </h2>

//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: 4,
//           }}
//         >
//           {projects.map((project, index) => (
//             <Paper
//               key={index}
//               elevation={6}
//               sx={{
//                 width: 320,
//                 borderRadius: 3,
//                 overflow: "hidden",
//                 transition: "0.4s",
//                 cursor: "pointer",
//                 backgroundColor: "#1e293b",
//                 color: "white",
//                 "&:hover": {
//                   transform: "translateY(-10px) scale(1.03)",
//                   boxShadow: "0 15px 40px rgba(59,130,246,0.5)",
//                 },
//               }}
//             >
//               <Box sx={{ p: 3 }}>
//                 <h3 style={{ marginBottom: "10px" }}>
//                   {project.title}
//                 </h3>
//                 <p style={{ color: "#cbd5e1" }}>
//                   {project.desc}
//                 </p>
//               </Box>
//             </Paper>
//           ))}
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default Projects;
