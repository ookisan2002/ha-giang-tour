import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import React from "react";

const Section2 = forwardRef((props,ref) => {
  const day_btn = useRef([]);
  const [destination,setDestination] = useState({
    day1: ["Ha Giang","Tam Son","Yen Minh","Dong Van"],
    day2: ["Dong Van","Lung Cu","Ma Pi Leng","Nho Que","Du Gia"],
    day3: ["Meo Vac","Mau Due","Lung Tam","Quan Ba","Ha Giang"]
  })
  const [dayShowed,setDayShowed] = useState(0)
  const handleNextBtn = useCallback(()=>{
    if(dayShowed<2) setDayShowed(prev => prev+1)
  },[dayShowed]);
  const handlePrevBtn = useCallback(()=>{
    if(dayShowed>0) setDayShowed(prev => prev-1)
  },[dayShowed]);;
  useEffect(() => {
    var section2 = document.querySelector(".section2_container");
    const observerForTourDetail = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          var titleSection2 = document.querySelector(
            ".section2_container > h3"
          );
          var subTitleSection2 = document.querySelector(
            ".section2_container > p"
          );
          var mapSection2 = document.querySelector(".section2 .map_container");
          titleSection2.classList.add("appear");
          subTitleSection2.classList.add("appear");
          mapSection2.classList.add("appear");
        }
      });
    });

    observerForTourDetail.observe(section2);
    return () => {
      if (section2) {
        observerForTourDetail.unobserve(section2);
      }
      observerForTourDetail.disconnect();
    };
  }, []);
  return (
    <div className="section2_container" id="section2_container" ref={ref}>
      <p>HA GIANG CHEERS TOUR</p>
      <h3>BEST TRIP EVER</h3>
      <div className="section2">
        <div className="schedual">
          <div className="schedual_content">
            <div className="travel_animate">
              <img
                className={`motobike ${dayShowed === 0 ?"position1" : dayShowed === 1 ?"position2" :"position3"} `}
                src="assets/motobike.svg"
                alt=""
              />
              <div className={`route route1 ${dayShowed >= 1 ?"show" : ""}`}>
                <div></div>
                <img src="assets/strokedLine.svg" alt="" />
              </div>
              <div className="point"></div>
              <div className={`route route2 ${dayShowed >= 2 ?"show" : ""}`}>
                <div></div>
                <img src="assets/strokedLine.svg" alt="" />
              </div>
            </div>
            <div className="schedual_detail">
              <div className={`day_schedual schedual_day1 ${dayShowed === 0 ?"show" : ""} visited`}>
                <div className="point"></div>
                <p
                  ref={(el) => (day_btn.current[0] = el)}
                  onClick={() => setDayShowed(0)}
                  className="day day1"
                >
                  DAY 1
                </p>
                <p className="distance">(128 km)</p>
                <p className="destination">Ha Giang</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Tam Son</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Yen Minh</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Dong Van</p>
              </div>
              <div className={`day_schedual schedual_day2 ${dayShowed === 1 ?"show" : ""} ${dayShowed >= 1 ?"visited" : ""}`}>
                <div className="point point_day2"></div>
                <p
                  ref={(el) => (day_btn.current[1] = el)}
                  onClick={() => setDayShowed(1)}
                  className="day day2"
                >
                  DAY 2
                </p>
                <p className="distance">(128 km)</p>
                <p className="destination">Dong Van</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Lung Cu</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Ma Pi Leng</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Nho Que</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Du Gia</p>
              </div>
              <div className={`day_schedual schedual_day3 ${dayShowed === 2 ?"show" : ""} ${dayShowed >= 2 ?"visited" : ""}`}>
                <div className="point point_day3"></div>
                <p
                  ref={(el) => (day_btn.current[2] = el)}
                  onClick={() => setDayShowed(2)}
                  className="day day3"
                >
                  DAY 3
                </p>
                <p className="distance">(128 km)</p>
                <p className="destination">Meo Vac</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Mau Due</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Lung Tam</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Quan Ba</p>
                <div className="connect_line">
                  <svg
                    width="9"
                    height="35"
                    viewBox="0 0 9 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Vector 510">
                      <path
                        id="Vector 509"
                        d="M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z"
                        fill="#CFCFCF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="destination">Ha Giang</p>
              </div>
            </div>
            <button>BOOK NOW</button>
          </div>
          <div className="arrow_left" onClick={() => handlePrevBtn()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="14"
              viewBox="0 0 29 14"
              fill="none"
            >
              <path
                d="M0.940433 7.62075C0.353189 7.41349 0.353188 6.583 0.940435 6.37574L16.0169 1.05462C16.4464 0.903033 16.8968 1.22166 16.8968 1.67713L16.8968 12.3194C16.8968 12.7748 16.4464 13.0935 16.0169 12.9419L0.940433 7.62075Z"
                fill="#B34B1E"
                stroke="#B34B1E"
              ></path>
            </svg>
          </div>
          <div className="arrow_right" onClick={() => handleNextBtn()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="14"
              viewBox="0 0 29 14"
              fill="none"
            >
              <path
                d="M0.940433 7.62075C0.353189 7.41349 0.353188 6.583 0.940435 6.37574L16.0169 1.05462C16.4464 0.903033 16.8968 1.22166 16.8968 1.67713L16.8968 12.3194C16.8968 12.7748 16.4464 13.0935 16.0169 12.9419L0.940433 7.62075Z"
                fill="#B34B1E"
                stroke="#B34B1E"
              ></path>
            </svg>
          </div>
        </div>
        <div className="schedual_mobile">
          <div className="schedual_content">
            <div className="travel_animate">
              <img
                className={`motobike ${dayShowed === 0 ?"position1" : dayShowed === 1 ?"position2" :"position3"} `}
                src="assets/motobike.svg"
                alt=""
              />
              <div className={`route route1 ${dayShowed >= 1 ?"show" : ""}`}>
                <div></div>
                <img src="assets/strokedLine.svg" alt="" />
              </div>
              <div className="point"></div>
              <div className={`route route2 ${dayShowed >= 2 ?"show" : ""}`}>
                <div></div>
                <img src="assets/strokedLine.svg" alt="" />
              </div>
            </div>
            <div className="schedual_detail">
              <div className={`day_schedual schedual_day1 ${dayShowed === 0 ?"show" : ""} visited`}>
                <div className="point"></div>
                <p
                  ref={(el) => (day_btn.current[0] = el)}
                  onClick={() => setDayShowed(0)}
                  className="day day1"
                >
                  DAY 1
                  <p className="distance">(128 km)</p>
                </p>
                {/* <p className="destination">Ha Giang</p>
                <p className="destination">Tam Son</p>
                <p className="destination">Yen Minh</p>
                <p className="destination">Dong Van</p> */}
              </div>
              <div className={`day_schedual schedual_day2 ${dayShowed === 1 ?"show" : ""} ${dayShowed >= 1 ?"visited" : ""}`}>
                <div className="point point_day2"></div>
                <p
                  ref={(el) => (day_btn.current[1] = el)}
                  onClick={() => setDayShowed(1)}
                  className="day day2"
                >
                  DAY 2
                  <p className="distance">(128 km)</p>
                </p>
                {/* <p className="destination">Dong Van</p>
                <p className="destination">Lung Cu</p>
                <p className="destination">Ma Pi Leng</p>
                <p className="destination">Nho Que</p>
                <p className="destination">Du Gia</p> */}
              </div>
              <div className={`day_schedual schedual_day3 ${dayShowed === 2 ?"show" : ""} ${dayShowed >= 2 ?"visited" : ""}`}>
                <div className="point point_day3"></div>
                <p
                  ref={(el) => (day_btn.current[2] = el)}
                  onClick={() => setDayShowed(2)}
                  className="day day3"
                >
                  DAY 3
                <p className="distance">(128 km)</p>
                </p>
                {/* <p className="destination">Meo Vac</p>
                <p className="destination">Mau Due</p>
                <p className="destination">Lung Tam</p>
                <p className="destination">Quan Ba</p>
                <p className="destination">Ha Giang</p> */}
              </div>
            </div>
            <div className="schedual_day_detail">
                {dayShowed === 0 ? destination.day1.map((des)=>{
                  return (
                    <p className="destination">{des}</p>
                  )
                }) : ""}
                {dayShowed === 1 ? destination.day2.map((des)=>{
                  return (
                    <p className="destination">{des}</p>
                  )
                }) : ""}
                {dayShowed === 2 ? destination.day3.map((des)=>{
                  return (
                    <p className="destination">{des}</p>
                  )
                }) : ""}
            </div>
            <button>BOOK NOW</button>
          </div>
        </div>
        <div className="map_container">
          <img className="map_base" src="assets/mapBase.png" alt="" />
          <img className={`route_img1 ${dayShowed === 0 ?"show" : ""}`}  src="assets/route3.png" alt="" />
          <img className={`route_img2 ${dayShowed === 1 ?"show" : ""}`} src="assets/route2.png" alt="" />
          <img className={`route_img1 ${dayShowed === 2 ?"show" : ""}`} src="assets/route1.png" alt="" />
        </div>
      </div>
      <div className="intro_video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Nj6IqVLoaUg?si=c1OSSPiaPdQvYnq5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
});
export default Section2;
