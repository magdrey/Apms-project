import React from "react";
import NavBar from "../../components/NavBar";
import landingimg1 from "../../assets/landingback1.png";

function HomePage() {
  return (
    <div className="landPage">
      <NavBar />
      <div
        id="homepage"
        style={{
          backgroundImage: `url(${landingimg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "75vh",
        }}
      >
        {" "}
        landing page
      </div>
    </div>
  );
}

export default HomePage;
