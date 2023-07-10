import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <div id="footer">
      <div className="ftlogo">
        <div className="ftgo">
          <div className="logo">
            <HashLink className="lg2" smooth to="#top">
              <img className="lg1" src={logo} alt="logo" />
            </HashLink>
          </div>
          <div className="ftname">
            {" "}
            Automatic Power Management System (APMS)
          </div>
        </div>
        <div className="ftaddy">
          <p>Department of Computer Engineering</p>
          <p>Facualty of Engineering and Technology</p>
          <p>P.M.B 1515. ilorin, Kwara state, Nigeria.</p>
        </div>
      </div>
      <div className="cprt">
        <p>copyright|all right reserved</p>
      </div>
      <div className="ftct">
        <p>info@apms.com</p> <br />
        <p>12345678987</p> <br />
        <p>23456789865</p>
      </div>
    </div>
  );
}

export default Footer;
