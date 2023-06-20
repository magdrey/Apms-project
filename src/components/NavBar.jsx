import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/Logo.png";
import Ham from "../assets/Hamburger-menu.svg";
import Close from "../assets/Close.svg";

function NavBar() {
  const [hamopen, setHamopen] = useState(false);
  const toggleham = () => setHamopen(!hamopen);
  const toggleclose = () => setHamopen(false);

  return (
    <div className="Navbar">
      <div className="Navlogo">
        <div className="logo">
          <HashLink className="lg2" smooth to="#top">
            <img className="lg1" src={logo} alt="logo" />
          </HashLink>
        </div>
        <div className="log-name"> APMS</div>
      </div>

      {hamopen ? (
        <img className="ham" src={Close} onClick={toggleham} alt="close" />
      ) : (
        <img className="ham" src={Ham} onClick={toggleham} alt="menu" />
      )}

      <div className={`${hamopen ? "navshow" : "navhid"} "Navitem" `}>
        <div className="NavLinks">
          <HashLink smooth to="#top" onClick={toggleclose} className="link-to">
            <p className="link">About </p>
          </HashLink>
          <HashLink smooth to="#top" onClick={toggleclose} className="link-to">
            <p className="link">What does APMS do ?</p>
          </HashLink>
          <HashLink smooth to="#top" onClick={toggleclose} className="link-to">
            <p className="link">team members</p>
          </HashLink>
          <HashLink smooth to="#top" onClick={toggleclose} className="link-to">
            <p className="link">Contacts </p>
          </HashLink>
        </div>
        <div className="req-btn upbtn">
          {" "}
          <p className="sign">Sign Up</p>{" "}
        </div>
        <div className="req-btn">
          {" "}
          <p className="sign">Sign In</p>{" "}
        </div>
      </div>
      {/* <div className={`${hamopen ? "navshow" : "navhid"} "Navitem" `}></div> */}
    </div>
  );
}

export default NavBar;
