// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./navbar.css";

// // const Navbar = () => {
// //   return (
// //     <nav className="navbar">
// //       <div className="container">
// //       <h3 className="logo">Event Management</h3>
// //       <div className="resp-div">
// //         <button className="nav-close-btn">X</button>
// //       <ul className="nav-links">
// //         <Link to="/">
// //           <li>Home</li> 
// //         </Link>
// //         <Link to="/EventCreate">
// //           <li>Create Event</li>
// //         </Link>
// //         <Link to="/EventListing">
// //           <li>List Event</li>
// //         </Link>
// //       </ul>
// //       <div className="buttons">
// //       <Link to="/Create-an-Account">
// //         <button className="nav-btn register">Sign up</button>
// //         </Link>
// //         <button className="nav-btn sign-in">Sign In</button>
        
// //         </div>
// //         </div>    
// //       <button className="toggle">==</button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

// const Navbar = () => {
//   const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

//   const toggleResponsiveMenu = () => {
//     setShowResponsiveMenu(!showResponsiveMenu);
//   };

//   const closeResponsiveMenu = () => {
//     setShowResponsiveMenu(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <h3 className="logo">Event Management</h3>
//         <div className={`resp-div ${showResponsiveMenu ? "show" : ""}`}>
//           <button className="nav-close-btn" onClick={closeResponsiveMenu}>
//             X
//           </button>
//           <ul className="nav-links">
//             <Link to="/" onClick={closeResponsiveMenu}>
//               <li>Home</li>
//             </Link>
//             <Link to="/EventCreate" onClick={closeResponsiveMenu}>
//               <li>Create Event</li>
//             </Link>
//             <Link to="/EventListing" onClick={closeResponsiveMenu}>
//               <li>List Event</li>
//             </Link>
//           </ul>
//           <div className="buttons">
//             <Link to="/Create-an-Account">
//               <button className="nav-btn register">Sign up</button>
//             </Link>
//             <button className="nav-btn sign-in">Sign In</button>
//           </div>
//         </div>
//         <button className="toggle" onClick={toggleResponsiveMenu}>
//           ==
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const toggleResponsiveMenu = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
  };

  const closeResponsiveMenu = () => {
    setShowResponsiveMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h3 className="logo">Event Management</h3>
        <div className={`resp-div ${showResponsiveMenu ? "show" : ""}`}>
          <button className="nav-close-btn" onClick={closeResponsiveMenu}>
            X
          </button>
          <ul className="nav-links">
            <Link to="/" onClick={closeResponsiveMenu}>
              <li>Home</li>
            </Link>
            <Link to="/EventCreate" onClick={closeResponsiveMenu}>
              <li>Create Event</li>
            </Link>
            <Link to="/EventListing" onClick={closeResponsiveMenu}>
              <li>List Event</li>
            </Link>
          </ul>
          <div className="buttons">
            <Link to="/Create-an-Account">
              <button className="nav-btn register">Sign up</button>
            </Link>
            <button className="nav-btn sign-in">Sign In</button>
          </div>
        </div>
        <button className="toggle" onClick={toggleResponsiveMenu}>
          <FaBars/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
