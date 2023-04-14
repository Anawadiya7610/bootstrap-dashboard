// import React, { useState } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import "./../index.css";
// import { Link } from "react-router-dom";

// export const Sidebar = (props) => {
//   const { convertType} = props.data;

//   return (
//     <div className={`body-area${convertType ? " body-pd" : ""}`}>
//       <div className={`l-navbar${convertType ? " show" : ""}`}>
//         <nav className="nav">
//           <div>
//             <a
//               href="https://cluemediator.com"
//               target="_blank"
//               className="nav_logo"
//               rel="noopener"
//             >
//               <i className="bi bi-alexa nav_logo-icon" />{" "}
//               <span className="nav_logo-name">Admin</span>
//             </a>
//             <div className="nav_list">
//               <a href="/dashboard" className="nav_link" rel="noopener">
//                 <i className="bi bi-people nav_icon" />
//                 <span className="nav_name">Dashboard</span>
//               </a>
//               <a href="Form" className="nav_link" rel="noopener">
//                 <i className="bi bi-person-check nav_icon" />
//                 <span className="nav_name">Form</span>
//               </a>

//               <Dropdown>
//                 <a className="nav_link" rel="noopener">
//                   <Dropdown.Toggle
//                     variant="Secondary"
//                     className="dropdown_btn"
//                     id="dropdown-basic"
//                   >
//                     <i className="bi bi-table nav_icon" />
//                     <span className="nav_name">Table</span>
//                   </Dropdown.Toggle>
//                 </a>

//                 <Dropdown.Menu>
//                   <Link to={"/order"} style={{ textDecoration: "none" }}>
//                     <Dropdown.Item>Order Table</Dropdown.Item>
//                   </Link>
//                   <Link to={"/rate"} style={{ textDecoration: "none" }}>
//                     <Dropdown.Item>Rate Table</Dropdown.Item>
//                   </Link>
//                   <Link to={"/user"} style={{ textDecoration: "none" }}>
//                     <Dropdown.Item href="/user">User Table</Dropdown.Item>
//                   </Link>
//                   <Link to={"/visitor"} style={{ textDecoration: "none" }}>
//                     <Dropdown.Item href="#/visitor">
//                       Visitors Table
//                     </Dropdown.Item>
//                   </Link>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </div>
//           <a
//             href="https://cluemediator.com"
//             target="_blank"
//             className="nav_link"
//             rel="noopener"
//           >
//             <i className="bi bi-box-arrow-left nav_icon" />
//             <span className="nav_name">SignOut</span>
//           </a>
//         </nav>
//       </div>
//       {/*
//   <div className="pt-4 pb-4">
//     <h4>Main Component</h4>
//   </div>
// */}
//     </div>
//   );
// };
