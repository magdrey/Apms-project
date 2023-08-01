import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Mteam } from "./Homecards";

function MeetDteam() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const isMobile = width < 768;
  window.addEventListener("resize", handleResize);
  return (
    <>
      {isMobile && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          autoplay={true}
          autoplaytimeout={3000}
          loop={true}
          pagination={{ clickable: true }}
          className="MDT-swiper"
        >
          {Mteam.map(({ img, name }, index) => (
            <SwiperSlide className="MDT-slide" key={index}>
              <div className="MDTdiv">
                <div className="MDTimg">{img}</div>
                <div className="MDTcontent ">
                  {name} <br />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!isMobile && (
        <div className="MDT-cont">
          {Mteam.map(({ img, name }, index) => (
            <div className="MDT-slide">
              <div className="MDTdiv" key={index}>
                <div className="MDTimg">{img}</div>
                <div className="MDTcontent ">
                  {name} <br />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MeetDteam;
