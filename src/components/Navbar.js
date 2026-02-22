
import React from "react";
 

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        backgroundColor: "#0f172a",
        color: "white",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {/* Logo + Profile Image */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px", // space between name and image
        }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#3b82f6" }}>
          Kush Meena
        </h2>
        <img
          src="kush.jpg"
          alt="Profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%", // makes image round
            objectFit: "cover",
            border: "2px solid #3b82f6", // optional border
          }}
        />
      </div>

      {/* Navbar links */}
      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="#about"
            style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;





// import React from "react";

// function Navbar() {
//   return (
//     <nav
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "80px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "0 30px",
//         backgroundColor: "#0f172a",
//         color: "white",
//         zIndex: 1000,
//         boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
//       }}
//     >
//       <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#3b82f6" }}>
//         Kush Meena
//       </h2>
//       <ul
//         style={{
//           display: "flex",
//           gap: "25px",
//           listStyle: "none",
//           margin: 0,
//           padding: 0,
//         }}
//       >
//         <li>
//           <a
//             href="#about"
//             style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href="#skills"
//             style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
//           >
//             Skills
//           </a>
//         </li>
//         <li>
//           <a
//             href="#projects"
//             style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
//           >
//             Projects
//           </a>
//         </li>
//         <li>
//           <a
//             href="#experience"
//             style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
//           >
//             Experience
//           </a>
//         </li>
//         <li>
//           <a
//             href="#contact"
//             style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



// // import React from "react";

// // function Navbar() {
// //   return (
// //     <nav className="navbar">
// //       <h2 className="logo">Kush Meena</h2>
// //       <ul>
// //         <li><a href="#about">About</a></li>
// //         <li><a href="#skills">Skills</a></li>
// //         <li><a href="#projects">Projects</a></li>
// //           <li><a href="#experience">Experience</a></li>
// //         <li><a href="#contact">Contact</a></li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // export default Navbar;
