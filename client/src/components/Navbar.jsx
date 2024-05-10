import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo">
        <img src="restro_icon.png" alt=""  />
      </div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>

        <button className="menuBtn" onClick={()=>{}}>
         <Link to="menu">Our Menu</Link> </button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
