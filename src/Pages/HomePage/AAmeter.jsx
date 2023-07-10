import React, { useState } from "react";

function AAmeter() {
  const [apartments, setApartments] = useState([
    {
      apartment: "1",
      TNOU: 34.62,
      vol: 220,
      pwr: 156,
      peaki: 30,
      rmsi: 20,
      pwrsul: true,
    },
    {
      apartment: "2",
      TNOU: 45.74,
      vol: 230,
      pwr: 46,
      peaki: 30,
      rmsi: 20,
      pwrsul: true,
    },
  ]);

  const adjustBool = (valueIndex) => {
    const newcontr = [...apartments];
    newcontr.forEach((item, index) => {
      if (valueIndex === index) {
        const newValue = !item.pwrsul;
        item.pwrsul = newValue;
      }
    });
    setApartments(newcontr);
    console.log(apartments);
  };
  return (
    <div className="aameter">
      {apartments.map(
        ({ apartment, TNOU, vol, pwr, pwrsul, peaki, rmsi }, index) => (
          <div key={index} className="apartbul">
            <div className="generalbultitle">
              {" "}
              <p className="gbtxt"> Apartment {apartment}</p>
            </div>
            <div className="aptvol">
              <div className="tnoutxt aptparnam">Total Number of Unit</div>
              <div className="tnouval aptparval"> {TNOU} units </div>
            </div>
            <div className="aptengpara">
              <div className="aptvol">
                <div className="voltxt aptparnam">voltage</div>
                <div className="volval aptparval"> {vol} volts </div>
              </div>
              <div className="aptpwrcos">
                <div className="pwrcostxt aptparnam">Power consumption</div>
                <div className="pwrcosval aptparval"> {pwr} kwh</div>
              </div>
              <div className="aptpeakI">
                <div className="peakItxt aptparnam"> Peak Current</div>
                <div className="peakIval aptparval"> {peaki} Amps</div>
              </div>
              <div className="aptrmsI">
                <div className="rmsItxt aptparnam">R.M.S Current</div>
                <div className="rmsIval aptparval"> {rmsi} Amps</div>
              </div>
            </div>
            <div className="powctr">
              <p className="powctxt"> Power Supply Control</p>
              <div
                onClick={() => {
                  adjustBool(index);
                }}
                className={`${pwrsul ? "ctrbtnon" : "ctrbtnoff"} `}
              >
                <div className="PWRON"></div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default AAmeter;
