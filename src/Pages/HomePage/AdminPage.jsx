import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import teamex1 from "../../assets/teamex1.png";
import { BiLogOut } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate /* useLocation */ } from "react-router-dom";
import Buildingmeter from "./Buildingmeter";
import AAmeter from "./AAmeter";

function AdminPage() {
  const navigate = useNavigate();

  /* 
     const location = useLocation();

     const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };  */

  const [outx2, setOutx2] = useState(false);
  const outon = () => setOutx2(!outx2);
  const outoff = () => setOutx2(false);

  const [profarr, setProfarr] = useState(true);
  const arrdwn = () => setProfarr(true);
  const arrup = () => setProfarr(false);

  return (
    <div className="adminpage">
      <div className="logNav">
        <div className="loglogondname">
          <div className="loglogo">
            <img src={logo} alt="logo" />
            <p>APMS</p>
          </div>
          <div className="loglogname">Automatic Power Managment System</div>
        </div>
        <div className="logprof">
          <div className="profpic">
            <img src={teamex1} alt="img" />
            <div className="droparr">
              {profarr ? (
                <FaAngleDown onClick={arrup} />
              ) : (
                <FaAngleUp onClick={arrdwn} />
              )}
            </div>
          </div>{" "}
          <div className="proftxt">
            <div className={`${profarr ? "profhide" : "profdetails"} `}>
              <div className="profname mt5"> Akanbi Favour</div>
              <div className="profstat mt5"> Admin</div>
            </div>
          </div>
          <div
            className={`${profarr ? "outhide" : "proflogout"} `}
            onMouseEnter={outon}
            onMouseLeave={outoff}
            onClick={() => navigate("/")}
          >
            <div className={`${outx2 ? "out2" : "out"} `}>
              {" "}
              <BiLogOut />
            </div>
            <p>LogOut</p>
          </div>
        </div>
      </div>
      <div className="dashboardA">
        <div className="dashnav">
          <div className="dashtitle"> Admin Dashboard</div>
          <div className="dashDT"></div>
        </div>
        <div className="dashbody">
          <Buildingmeter />
          <AAmeter />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
