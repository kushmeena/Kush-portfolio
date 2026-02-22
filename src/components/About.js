import React, { useState, useEffect } from "react";

function About() {
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
        border: "4px solid #3b82f6",
        borderRadius: "12px",
        margin: isMobile ? "20px" : "40px",
        padding: isMobile ? "15px" : "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <div
        id="about"
        style={{
          padding: isMobile ? "60px 15px" : "80px 20px",
          textAlign: "center",
          backgroundColor: "#0f172a",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "28px" : "36px",
            marginBottom: isMobile ? "15px" : "20px",
            color: "#3b82f6",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.8",
            fontSize: isMobile ? "14px" : "16px",
            color: "#cbd5e1",
            textAlign: isMobile ? "left" : "justify",
          }}
        >
          Hello! I am <strong>Kush Meena</strong>, a passionate Full-Stack Developer with strong expertise in ReactJS, React Native, Node.js, JavaScript, HTML, CSS, and MySQL. I am currently working as a <strong>Jr. Software Developer</strong> at <strong>Numeric Infosystem Pvt. Ltd., Gwalior (M.P)</strong> since 2025, where I develop and maintain web applications, build full-stack MERN projects, design REST APIs, and ensure high-quality solutions. I am a fast learner, proactive, and always looking for challenging projects to improve my skills. My hobbies include fitness, morning walks, enjoying sunrise views, listening to music, traveling, and coding. My goal is to create high-performance, responsive applications while continuously learning and growing as a developer.
        </div>
      </div>
    </div>
  );
}

export default About;






// import React from "react";

// function About() {
//   return (

//  <div
//       style={{
//         border: "4px solid #3b82f6",
//         borderRadius: "12px",
//         margin: "40px",
//         padding: "20px",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//       }}
//     >

//     <div
//   id="about"
//   style={{
//     padding: "80px 20px",
//     textAlign: "center",
//     backgroundColor: "#0f172a",
//     color: "white",
//   }}
// >
//   <h2
//     style={{
//       fontSize: "36px",
//       marginBottom: "20px",
//        color: "#3b82f6",
//     }}
//   >
//     About Me
//   </h2>

//   <div
//         style={{
//           maxWidth: "900px",
//           margin: "auto",
//           lineHeight: "1.7",
//           fontSize: "16px",
//           color: "#cbd5e1",
//           textAlign: "justify",
//         }}
//       >
//         Hello! I am <strong>Kush Meena</strong>, a passionate Full-Stack Developer with strong expertise in ReactJS, React Native, Node.js, JavaScript, HTML, CSS, and MySQL. I am currently working as a <strong>Jr. Software Developer </strong> at <strong>Numeric Infosystem Pvt. Ltd., Gwalior (M.P)</strong> since 2025, where I develop and maintain web applications, build full-stack MERN projects, design REST APIs, and ensure high-quality solutions. I am a fast learner, proactive, and always looking for challenging projects to improve my skills. My hobbies include fitness, morning walks, enjoying sunrise views, listening to music, traveling, and coding. My goal is to create high-performance, responsive applications while continuously learning and growing as a developer.
//       </div>
// </div>
// </div>
//   );
// }

// export default About;
