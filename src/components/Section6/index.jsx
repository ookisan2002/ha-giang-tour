import { useEffect, useRef } from "react";
import "./styles.css";

const Section6 = () => {
  const headerSection6 = useRef(null);
  const subHeaderSection6 = useRef(null);
  useEffect(() => {
    const observerForSection6 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    });
    [headerSection6.current, subHeaderSection6.current].forEach((el) => {
      observerForSection6.observe(el);
    });
    return () => {
      [headerSection6.current, subHeaderSection6.current].forEach((el) => {
        observerForSection6.unobserve(el);
      });
      observerForSection6.disconnect();
    };
  }, []);
  return (
    <div class="section6">
      <p ref={subHeaderSection6}>ANOTHER</p>
      <h3 ref={headerSection6}>GREAT TRIPS</h3>
      <img src="assets/anTrip.webp" className="section6_background" alt="" />
      <div className="tour_card">
        <div className="tour_img">
          <div className="option">
            <p>$269</p>
            <span>EASY RIDER - BASIC BIKE</span>
          </div>
          <div className="option">
            <p>$299</p>
            <span>EASY RIDER - BIG BIKE</span>
          </div>
        </div>
        <h3>HA GIANG LOOP TOUR (4D4N)</h3>
        <div className="tour_infor_row">
          <img
            src="/assets/Search results for Location - Flaticon-12 1.svg"
            alt=""
            className="tour_card_icon"
          />
          <p>Pick up:</p>
          <span>
            Hanoi, Airport, Sapa, Cat ba island, Ninh Binh or any hotel in Ha
            Giang city
          </span>
        </div>
        <div className="tour_infor_row">
          <img src="/assets/Group.svg" alt="" className="tour_card_icon" />
          <p>Group size:</p>
          <span>Group size: 9 - 12 pax</span>
        </div>
        <div className="tour_infor_row">
          <img
            src="/assets/Search results for Bus - Flaticon-12 1.svg"
            alt=""
            className="tour_card_icon"
          />
          <p>Transport:</p>
          <span>Sleeper bus & Motorbike with Local easy rider</span>
        </div>
        <div class="btn_group">
          <button className="book_btn ">BOOK NOW</button>
          <button className="view_tour_btn">VIEW TOUR</button>
        </div>
      </div>
    </div>
  );
};
export default Section6;
