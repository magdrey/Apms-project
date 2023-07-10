import React, { useState } from "react";

function Buildingmeter() {
  const [supply, setSupply] = useState(true);
  /* const supplyon = () => setSupply(true);
  const supplyoff = () => setSupply(false); */
  const supplyswt = () => setSupply(!supply);

  return (
    <div className="generalbul">
      <div className="generalbultitle">
        {" "}
        <p className="gbtxt">Energy Parameters for the Building</p>
      </div>
      <div className="engpara">
        <div className="vol">
          <div className="voltxt parnam">voltage</div>
          <div className="volval parval"> 220 volts </div>
        </div>
        <div className="pwrcos">
          <div className="pwrcostxt parnam">Power consumption</div>
          <div className="pwrcosval parval"> 150 kwh</div>
        </div>
        <div className="peakI">
          <div className="peakItxt parnam"> Peak Current</div>
          <div className="peakIval parval"> 20 Amps</div>
        </div>
        <div className="rmsI">
          <div className="rmsItxt parnam">R.M.S Current</div>
          <div className="rmsIval parval"> 30 Amps</div>
        </div>
      </div>
      <div className="powctr">
        <p className="powctxt"> Power Supply Control</p>
        <div
          onClick={supplyswt}
          className={`${supply ? "ctrbtnoff" : "ctrbtnon"} `}
        >
          <div className="PWRON"></div>
        </div>
      </div>
    </div>
  );
}

export default Buildingmeter;
