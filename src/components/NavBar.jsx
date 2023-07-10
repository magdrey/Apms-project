import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useNavigate /* useLocation */ } from "react-router-dom";

function NavBar() {
  const [hamopen, setHamopen] = useState(false);
  const toggleham = () => setHamopen(!hamopen);
  const toggleclose = () => setHamopen(false);

  const navigate = useNavigate();

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
        <MdClose className="ham close" onClick={toggleham} />
      ) : (
        <FaBars className="ham" onClick={toggleham} />
      )}

      <div className={`${hamopen ? "navshow" : "navhid"} "Navitem" `}>
        <div className="NavLinks">
          <HashLink smooth to="#top" onClick={toggleclose} className="link-to">
            <p className="link">About </p>
          </HashLink>
          <HashLink
            smooth
            to="#WCAPMSD"
            onClick={toggleclose}
            className="link-to"
          >
            <p className="link">What does APMS do ?</p>
          </HashLink>
          <HashLink
            smooth
            to="#MeetDT"
            onClick={toggleclose}
            className="link-to"
          >
            <p className="link">team members</p>
          </HashLink>
          <HashLink
            smooth
            to="#Contactus"
            onClick={toggleclose}
            className="link-to"
          >
            <p className="link">Contacts </p>
          </HashLink>
        </div>
        <div className="req-btn upbtn">
          {" "}
          <p className="sign">Sign Up</p>{" "}
        </div>
        <div className="req-btn" onClick={() => navigate("/admin")}>
          {" "}
          <p className="sign">Sign In</p>{" "}
        </div>
      </div>
      {/* <div className={`${hamopen ? "navshow" : "navhid"} "Navitem" `}></div> */}
    </div>
  );
}

export default NavBar;
