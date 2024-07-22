import { forwardRef } from "react";
import "./styles.css"

const Banner = forwardRef((props,ref) => {
  return (
    <div class="banner_container" ref={ref}>
      <img class="logo" src="/assets/Layer_1.svg" alt="" />
      <div class="title_banner">
        <h3>START WITH</h3>
        <h1>HA GIANG LOOP TOUR</h1>
        <p>3 DAYS - 3 NIGHTS</p>
      </div>
      <div class="banner_item_container">
        <div class="banner_item">
          <img src="assets/Group (2).svg" alt="" class="banner_item_icon" />
          <div class="banner_item_content">
            <h4>HIGHLIGHT</h4>
            <ul class="banner_item_content">
              <li>Off the beaten track</li>
              <li>Motobike tour with local driver</li>
              <li>Meeting more new friends</li>
              <li>Try Vietnam cuisine</li>
              <li>Meditation/ swimming on waterfall</li>
              <li>Family Dinner and more</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="banner_item">
            <img src="/assets/Group (1).svg" alt="" class="banner_item_icon" />
            <div class="banner_item_content">
              <h4>DEPARTURE</h4>
              <p>Every Day</p>
            </div>
          </div>
          <div class="banner_item">
            <img
              src="/assets/Search results for Location - Flaticon-12 1.svg"
              alt=""
              class="banner_item_icon"
            />

            <div class="banner_item_content">
              <h4>PICK UP FROM</h4>
              <p>
                Hanoi, Airport, Sapa, Cat ba island, Ninh Binh or any hotel in
                Ha Giang city
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="banner_item">
            <img src="/assets/Group.svg" alt="" class="banner_item_icon" />
            <div class="banner_item_content">
              <h4>GROUP SIZE</h4>
              <p>7-9 pax</p>
            </div>
          </div>
          <div class="banner_item">
            <img
              src="/assets/Search results for Bus - Flaticon-12 1.svg"
              alt=""
              class="banner_item_icon"
            />

            <div class="banner_item_content">
              <h4>TRANSPORT</h4>
              <p>Sleeper bus & Motorbike with Local easy rider</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_container">
        <div class="book_btn">
          <img src="/assets/Group.png" alt="" />
          <p>SELF - DRIVING</p>
          <h3>$169</h3>
        </div>
        <div class="book_btn">
          <img src="/assets/Group.png" alt="" />
          <p>PRIVATE DRIVER</p>
          <h3>$199</h3>
        </div>
      </div>
    </div>
  );
});
export default Banner;
