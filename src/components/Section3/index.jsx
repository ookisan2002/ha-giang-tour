import { forwardRef, useEffect } from "react";
import "./styles.css";
import Article from "./Article";

const Section3 = forwardRef((props,ref) => {
  useEffect(() => {
    var subHeaderForTripDetail = document.querySelector(".section3 h3");
    var headerForTripDetail = document.querySelector(".section3 p");
    var articleTitleForTripDetail = document.querySelectorAll(".title");
    var articleForTripDetail = document.querySelectorAll(
      ".article_paragraph p"
    );
    var time = document.querySelectorAll(".article_header h3");
    const observerForTripDetail = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    });
    [
      subHeaderForTripDetail,
      headerForTripDetail,
      ...articleTitleForTripDetail,
      ...articleForTripDetail,
      ...time,
    ].forEach((el) => {
      observerForTripDetail.observe(el);
    });
    return () => {
      [
        subHeaderForTripDetail,
        headerForTripDetail,
        ...articleTitleForTripDetail,
        ...articleForTripDetail,
        ...time,
      ].forEach((el) => {
        observerForTripDetail.unobserve(el);
      });
      observerForTripDetail.disconnect();
    };
  },[]);
  return (
    <div class="section3" id="section3" ref={ref}>
      <p>YOUR</p>
      <h3>TRIP DETAILS</h3>
      {[1,2,3].map(()=>{
        return (
            <Article/>
        )
      })}
    </div>
  );
});
export default Section3;
