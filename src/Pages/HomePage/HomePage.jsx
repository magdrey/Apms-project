import React from "react";
import landingimg1 from "../../assets/landingback1.png";
import lndimg1 from "../../assets/lndimg1.png";
import lndimg2 from "../../assets/lndimg2.png";
import lndimg3 from "../../assets/lndimg3.png";
import { wcapmsdcard } from "./Homecards";
import contactimg from "../../assets/contactimg.png";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="landPage">
        <div
          id="homepage"
          style={{
            backgroundImage: `url(${landingimg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "85vh",
          }}
        >
          <div className="landtxt">
            <p className="txt1">
              {" "}
              Power Up Your Savings With Smart Energy Management{" "}
            </p>
            <p className="txt2">
              Our Automatic Power Management System helps you manage and dave up
              power by automatically switching power soures when one is
              unavailable. Your microgrid power supply can be effectively
              managed and you can say goodbye to energy waste and hello to
              saving with our system.
            </p>
          </div>
          <div className="landpics">
            <img className="lndimg1 lndimg" src={lndimg1} alt="img" />
            <img className="lndimg2 lndimg" src={lndimg2} alt="img" />
            <img className="lndimg3 lndimg" src={lndimg3} alt="img" />
          </div>
        </div>
        {/* what can apms do */}
        <div id="WCAPMSD">
          <div className="wcadhead">
            <p className="headtxt"> What can APMS do ?</p>
            <p className="subtxt">
              The Automatic Power Management System can manage, monitor and
              control your power usage effectively
            </p>
          </div>
          <div className="wcapmsd">
            {wcapmsdcard.map(({ img, wcad, txt }) => (
              <div className="wcad">
                <div className="wcadimg mb5">{img}</div>
                <p className="wcadwcad mb5">{wcad}</p>
                <p className="wcadtxt mb5">{txt}</p>
              </div>
            ))}
          </div>
        </div>
        {/* meet the team */}
        <div id="MeetDT">
          <div className="wcadhead">
            <p className="headtxt"> Meet The Team</p>
            <p className="subtxt">
              Meet the brilliant minds behind the development of
            </p>
          </div>
          {/* <MeetDteam/> swiper not yet installed */}
        </div>
        {/* contact */}
        <div id="Contactus">
          <div className="">
            <div className="wcadhead cthead">
              <p className="ct1 headtxt"> Contact Details</p>
              <p className="ct2 subtxt">
                Whenever there is a issue, you can contact us at anytime via
                telephone or email
              </p>
            </div>
            <div className="contactbdy">
              <p className="ctbdy"> Address: </p> <br />
              <p className="ctbdy"> tel: </p> <br />
              <p className="ctbdy"> Email: </p> <br />
            </div>
          </div>

          <div className="contactimg">
            <img className="ctimg" src={contactimg} alt="img" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
