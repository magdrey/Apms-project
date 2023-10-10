import React, { useState, useEffect } from "react";
import axios from "axios";

function Buildingmeter() {
  const [supply, setSupply] = useState(true);
  /* const supplyon = () => setSupply(true);
  const supplyoff = () => setSupply(false); */
  const supplyswt = () => setSupply(!supply);

  const user = JSON.parse(localStorage.getItem("user"));

  const [mdata, setMdata] = useState([]);

  const getMdata = () => {
    axios.get(`https://autopms.onrender.com/api/v1/data/`).then((response) => {
      setMdata(response.data.data);
      console.log(response.data.data[0]);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getMdata();
      // console.log(mdata);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="generalbul">
      {mdata.map((mdata) => {
        if (mdata.apartment === "ats") {
          return (
            <div key={mdata.Device}>
              <div className="generalbultitle">
                {" "}
                <p className="gbtxt">Energy Parameters for the Building</p>
              </div>
              <div className="engpara">
                <div className="vol">
                  <div className="voltxt parnam">voltage</div>
                  {mdata ? (
                    <div className="volval parval"> {mdata.VOLTAGE} volts </div>
                  ) : (
                    <div className="volval parval"> --- volts </div>
                  )}
                </div>
                <div className="pwrcos">
                  <div className="pwrcostxt parnam">Power consumption</div>
                  {mdata ? (
                    <div className="pwrcosval parval">
                      {mdata.VOLTAGE * mdata.Current} kwh
                    </div>
                  ) : (
                    <div className="volval parval"> --- kwh </div>
                  )}
                </div>
                <div className="peakI">
                  <div className="peakItxt parnam"> Current</div>
                  {mdata ? (
                    <div className="peakIval parval">
                      {" "}
                      {mdata.Current} Amps{" "}
                    </div>
                  ) : (
                    <div className="volval parval"> --- Amps </div>
                  )}
                </div>
                <div className="rmsI">
                  <div className="rmsItxt parnam"> Power Source </div>
                  {mdata ? (
                    <div className="rmsIval parval"> {mdata.Device}</div>
                  ) : (
                    <div className="volval parval"> ------ </div>
                  )}
                </div>
              </div>
              {/* <div className="powctr">
                <p className="powctxt"> Power Supply Control</p>
    
                <div
                  onClick={supplyswt}
                  className={`${supply ? "ctrbtnoff" : "ctrbtnon"} `}
                >
                  <div className="PWRON"></div>
                </div>
              </div> */}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Buildingmeter;
// {mdata.map((mdata) => (
//   <div key={mdata.device} className="generalbultitle">
//     {" "}
//     <p className="gbtxt">Energy Parameters for the Building</p>
//   </div>
//   <div className="engpara">
//     <div className="vol">
//       <div className="voltxt parnam">voltage</div>
//       {mdata ? (
//       <div className="volval parval"> {mdata.Current} volts </div>
//       ) : (  <div className="volval parval"> --- volts </div>
//         )}
//     </div>
//     <div className="pwrcos">

//       <div className="pwrcostxt parnam">Power consumption</div>
//       {mdata ? (
//       <div className="pwrcosval parval"> 150 kwh</div>
//       ) : (  <div className="volval parval"> --- kwh </div>
//       )}
//     </div>
//     <div className="peakI">
//       <div className="peakItxt parnam"> Peak Current</div>
//       {mdata ? (
//       <div className="peakIval parval"> 20 Amps</div>
//       ) : (  <div className="volval parval"> --- Amps </div>
//       )}
//     </div>
//     <div className="rmsI">
//       <div className="rmsItxt parnam"> Power Source </div>
//       {mdata ? (
//       <div className="rmsIval parval"> 30 Amps</div>
//       ) : (  <div className="volval parval"> ------ </div>
//       )}
//     </div>
//   </div>
//   <div className="powctr">
//     <p className="powctxt"> Power Supply Control</p>
//     <div
//       onClick={supplyswt}
//       className={`${supply ? "ctrbtnoff" : "ctrbtnon"} `}
//     >
//       <div className="PWRON"></div>
//     </div>
//   </div>
//   ))}
