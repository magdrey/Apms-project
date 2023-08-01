import React, { useState, useWebSocket, useEffect } from "react";
import axios from "axios";

function AAmeter() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [mdata, setMdata] = useState([]);
  const [powsul, setPowsul] = useState(true);

  // const socket = useWebSocket(
  //   `https://autopms.onrender.com/api/v1/data/${user.meterNumber}`
  // );

  // socket.onmessage = (event) => {
  //   const mdata = JSON.parse(event.mdata);
  //   setMdata(mdata);
  //   console.log(mdata);
  // };

  const getMdata = () => {
    axios
      .get(`https://autopms.onrender.com/api/v1/data/${user.meterNumber}`)
      .then((response) => {
        setMdata(response.data.data);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getMdata();
      console.log(mdata);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //   const onSubmit = async (e) => {
  //   try {
  //     const resp = await axios.get(
  //       `https://autopms.onrender.com/api/v1/data/${user.meterNumber}`,
  //       data
  //     );

  //     if (resp.data.message === "Login successful") {
  //       toast.success(resp.data.message);
  //       localStorage.setItem("user", JSON.stringify(resp.data.user));

  //       if (resp.data.user.name === "Drey") {
  //         navigate("/admin");
  //       } else {
  //         navigate("/user");
  //       }
  //     }

  //     console.log(resp.data);
  //     console.log(resp);
  //   } catch (error) {
  //     if (error.response.data.message) {
  //       toast.error(error.response.data.message);
  //     }
  //     if (error.response.data.error) {
  //       toast.error(error.response.data.error);
  //     }
  //     console.log(error);
  //   }
  // }

  // const [apartments, setApartments] = useState([
  //   {
  //     apartment: "1",
  //     TNOU: 34.62,
  //     vol: 220,
  //     pwr: 156,
  //     peaki: 30,
  //     rmsi: 20,
  //     pwrsul: true,
  //   },
  //   {
  //     apartment: "2",
  //     TNOU: 45.74,
  //     vol: 230,
  //     pwr: 46,
  //     peaki: 30,
  //     rmsi: 20,
  //     pwrsul: true,
  //   },
  // ]);

  const adjustBool = (valueIndex) => {
    setPowsul(!powsul);

    // const newcontr = [...apartments];
    // newcontr.forEach((item, index) => {
    //   if (valueIndex === index) {
    //     const newValue = !item.pwrsul;
    //     item.pwrsul = newValue;
    //   }
    // });
    // setApartments(newcontr);
    // console.log(apartments);
  };
  return (
    <div className="aameter">
      {mdata.map((mdata) => (
        <div key={mdata.meterNumber} className="apartbul">
          <div className="generalbultitle">
            {mdata ? (
              <p className="gbtxt"> Apartment {mdata.meterNumber}</p>
            ) : (
              <p className="gbtxt"> Apartment ---</p>
            )}
          </div>
          <div className=" tnou">
            <div className="tnoutxt aptparnam">Total Number of Unit</div>
            {mdata ? (
              <div className="tnouval aptparval">
                {mdata.meterNumber}
                units{" "}
              </div>
            ) : (
              <div className="tnouval aptparval">--- units </div>
            )}
          </div>
          <div className="aptengpara">
            <div className="aptvol">
              <div className="voltxt aptparnam">voltage</div>{" "}
              {mdata ? (
                <div className="volval aptparval"> {mdata.voltage} volts </div>
              ) : (
                <div className="volval aptparval"> --- volts </div>
              )}
            </div>
            <div className="aptpwrcos">
              <div className="pwrcostxt aptparnam">Power consumption</div>
              {mdata ? (
                <div className="pwrcosval aptparval"> {mdata.power} kwh</div>
              ) : (
                <div className="pwrcosval aptparval"> --- kwh</div>
              )}
            </div>
            <div className="aptpeakI">
              <div className="peakItxt aptparnam"> Peak Current</div>
              {mdata ? (
                <div className="peakIval aptparval"> {mdata.current} Amps</div>
              ) : (
                <div className="peakIval aptparval"> --- Amps</div>
              )}
            </div>
            <div className="aptrmsI">
              <div className="rmsItxt aptparnam">R.M.S Current</div>
              {mdata ? (
                <div className="rmsIval aptparval"> {mdata.current} Amps</div>
              ) : (
                <div className="rmsIval aptparval"> --- Amps</div>
              )}
            </div>
          </div>
          <div className="powctr">
            <p className="powctxt"> Power Supply Control</p>
            <div
              onClick={() => {
                // adjustBool(index);
                adjustBool();
              }}
              // className={`${pwrsul ? "ctrbtnon" : "ctrbtnoff"} `}
              className={powsul ? "ctrbtnon" : "ctrbtnoff"}
            >
              <div className="PWRON"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AAmeter;
