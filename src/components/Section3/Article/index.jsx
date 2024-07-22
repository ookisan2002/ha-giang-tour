import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

const Article = () => {
  const Arrow_left = () => {
    const swiper = useSwiper();
    return (
      <div className="arrow_left" onClick={() => swiper.slidePrev()}>
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
    );
  };
  const Arrow_right = () => {
    const swiper = useSwiper();
    return (
      <div
        className="arrow_right"
        onClick={() => swiper.slideNext()}
      >
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
    );
  };
  const article = useRef(null);
  let onCollapse;
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

    onCollapse = () => {
      article.current.classList.toggle("on_collapse");
    };
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
  });
  return (
    <div class="article" ref={article}>
      <div class="collapse_blur" onClick={() => onCollapse()}></div>
      <div class="article_header">
        <div>
          <img class="article_icon" src="assets/caroselImg/moon.svg" alt="" />
          <h3>NIGHT 1.</h3>
          <p className="sub_title">DONG VAN - DU GIA CHEERS HOMESTAY</p>
        </div>
        <div class="collapse_btn" onClick={() => onCollapse()}>
          <img src="assets/01 align center.svg" alt="" />
          <img class="plus" src="assets/01 align center.svg" alt="" />
        </div>
      </div>
      <div class="article_content">
        <img src="assets/Vector 515.png" alt="" />
        <div class="article_paragraph">
          <h3 class="title">DONG VAN - DU GIA CHEERS HOMESTAY</h3>
          <p>
            After breakfast we leave Dong Van Town to enter the highlight of the
            journey, the <strong>Ma Pi Leng Pass</strong> It is well known for
            its abrupt cliffs and breath-taking views, often referred to as the
            “king of the passes in Vietnam with its highest point at an altitude
            of 2,000 meters. As experience how spectacular the pass is, we will
            trek the Sky Path to have a closer look at the whole valley and Nho
            Que River.
          </p>
          <p>
            From the top view, there is a picturesque 360° panorama of Ma Pi
            Leng Pass. Once on the peak, you might feel overwhelmed by the
            majestic mountains and rivers. Then we continue to drive through the
            villages of Meo Vac, Mau Due, and Lung Ho, where our break for lunch
            is served.
          </p>
          <p>
            In the afternoon, we pass through the epic mountainous to Du Gia
            rural homestay. where. located in the middle of green rice fields.
            Cozy dinner with locals and drink ” Happy Water ”
            <strong>put your hand up and Party, Karaoke and Dancing</strong>.
            1...2..3 Zooo Cheers... so funyyy ')))
          </p>
        </div>
        <div class="article_slider_container">
          <div class="slider_header">
            <div class="slider_header_item">
              <img src="assets/Group (2).svg" alt="" />
              <p>Highlight on loop</p>
            </div>
            <div class="slider_header_item">
              <img src="assets/meal.svg" alt="" />
              <p>Meal</p>
            </div>
            <div class="slider_header_item">
              <img
                src="assets/Search results for Location - Flaticon-12 1.svg"
                alt=""
              />
              <p>Transport</p>
            </div>
            <div class="slider_header_item">
              <img
                src="assets/Search results for Location - Flaticon-12 1.svg"
                alt=""
              />
              <p>Accommodation</p>
            </div>
          </div>
          <div class="slider">
            <div className="swiper-container mySwiper">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                className="mySwiper"
                modules={[Navigation, Autoplay, A11y]}
                // navigation={{
                //   nextEl: arrow_right.current,
                //   prevEl: arrow_left.current,
                // }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  376: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                speed={1000}
              > 
                <Arrow_left/>
                <Arrow_right/>
                <SwiperSlide>
                  <img
                    src="assets/caroselImg/b164a3fe-6aa3-4eb7-9b38-55013d79fa6f.webp"
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/caroselImg/Lung-Tam-2.webp" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/caroselImg/Night-1-4.webp" alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="assets/caroselImg/b164a3fe-6aa3-4eb7-9b38-55013d79fa6f.webp"
                    alt="Slide 4"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/caroselImg/Lung-Tam-2.webp" alt="Slide 5" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/caroselImg/Night-1-4.webp" alt="Slide 6" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div class="slider_footer">
            <p>
              Bac Sum Pass, Heaven Gate, Nam Dam Villige, Chin Khoanh Pass, Tham
              Ma Pass, Dong Van Karst, Hmong Kings Palace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
