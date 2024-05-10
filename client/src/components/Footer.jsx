import React from "react";
import { SocialIcon } from "react-social-icons";
// import zomato_icon from "zomato_icon.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <img src="restro_icon.png" alt="" style={{ width: "200px" }} />
        <nav className="nav">
          <a href="#heroSection" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#qualities" className="nav-link">
            Services
          </a>
          <a href="#team" className="nav-link">
            Team
          </a>
          <a href="#reservation" className="nav-link">
            Reservation
          </a>
        </nav>
        <div className="social-media-icons">
          {/* Add your social media icons here */}
          <div className="social-media-icon">
            <SocialIcon
              className=".social-media-icon"
              url="https://www.linkedin.com/in/samad-mohammed-124a2925b/"
            />
          </div>
          <div className="social-media-icon">
            <SocialIcon
              className=".social-media-icon"
              url="https://www.instagram.com/5amad__?igsh=bjVndzNlZXJoMWQ0"
            />
          </div>

          <div className="social-media-icon">
            <SocialIcon url="https://github.com/samad-mohammed" />
          </div>
          <div className="social-media-icon">
            <img
              src="zomato_icon.png"
              alt=""
              style={{ height: "55px", marginTop: "-2px" }}
              onClick={() => {
                window.open("https://www.zomato.com/", "_blank");
              }}
            />
          </div>
        </div>
        <p className="copyright">
          &copy; 2024 Samad Mohammed. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

// import React from 'react'
// import { Link } from 'react-router-dom';
// const Footer = () => {
//   return (
//     <footer>
//         <div className="container">
//             <div className="banner">
//                 <div className="left">SAMAD</div>
//                 <div className="right">
//                     <p>Hyderabad, Telangana</p>
//                     <p>Timings : 04:00 PM - 12:00AM</p>
//                 </div>
//             </div>
//             <div className="banner">
//                 <div className="left">
//                     <p>Developed by <Link to={'https://github.com/samad-mohammed'}>Samad Mohammed</Link></p>
//                 </div>
//                 <div className="right">
//                     <p>All Rights Reserved by Samad Mohammed</p>
//                 </div>
//             </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer
