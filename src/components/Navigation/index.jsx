import { useEffect, useRef, useState } from "react";
import "./styles.css";

const Navigation = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const nav = useRef(null);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  useEffect(()=>{nav.current.classList.add("appear");},[])
  useEffect(() => {
    
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        nav.current.classList.remove("appear");
      } else {
        nav.current.classList.add("appear");
      }

      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <>
      <nav ref={nav}>
        <img class="logo" src="/assets/Layer_1.svg" alt="" />
        <div class="nav_content">
          <div class="nav_item">
            <p>HOME</p>
          </div>
          <div class="nav_item">
            <p>ABOUT US</p>
          </div>
          <div class="nav_item">
            <p>
              TOUR
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M6.00329 3.89139L2.38713 0.275389C2.20358 0.0916571 1.97909 -7.74593e-08 1.71368 -6.58579e-08C1.4483 -5.42577e-08 1.22392 0.0916833 1.04039 0.275389L0.482264 0.833335C0.298793 1.01678 0.207031 1.2413 0.207031 1.5066C0.207031 1.77191 0.298793 1.99632 0.482264 2.18005L5.32612 7.03128C5.50967 7.21485 5.73413 7.30664 5.99957 7.30664C6.265 7.30664 6.48928 7.21488 6.67291 7.03128L11.5168 2.18008C11.7003 1.99634 11.7921 1.77196 11.7921 1.50663C11.7921 1.2413 11.7003 1.01681 11.5168 0.833361L10.9587 0.275415C10.7753 0.0916829 10.5521 2.5297e-05 10.289 2.53085e-05C10.0262 2.532e-05 9.8005 0.0917092 9.61202 0.275415L6.00329 3.89139Z"
                  fill="#2E2E2E"
                />
              </svg>
            </p>
            <div class="sub_nav_content">
              <p>HA GIANG LOOP TOUR (4D4N)</p>
              <p>HA GIANG LOOP TOUR (3D3N)</p>
            </div>
          </div>
          <div class="nav_item">
            <p>DESTINATIONS</p>
          </div>
          <div class="nav_item">
            <p>BLOG</p>
          </div>
          <div class="nav_item">
            <p>FAQ</p>
          </div>
          <div class="nav_item">
            <p>CONTACT</p>
          </div>
          <div class="nav_item">
            <p>VIETNAM CHEERS HOSTEL</p>
          </div>
        </div>
        <div class="social">
          <img src="/assets/Frame 1000004303.png" alt="" />
          <img src="/assets/Frame 1000004304.png" alt="" />
        </div>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className="mobile_nav_trigger cursor-pointer"
        onClick={() => setOpenMobileNav(true)}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 4.57031H0.999998C0.447714 4.57031 0 5.01803 0 5.57031C0 6.12259 0.447714 6.57031 0.999998 6.57031H23C23.5523 6.57031 24 6.12259 24 5.57031C24 5.01803 23.5523 4.57031 23 4.57031ZM23 11.5703H1.00001C0.447718 11.5703 0 12.018 0 12.5703C0 13.1226 0.447718 13.5703 1.00001 13.5703H23C23.5523 13.5703 24 13.1226 24 12.5703C24 12.018 23.5523 11.5703 23 11.5703ZM1.00001 18.5703H23C23.5523 18.5703 24 19.018 24 19.5703C24 20.1226 23.5523 20.5703 23 20.5703H1.00001C0.447718 20.5703 0 20.1226 0 19.5703C0 19.018 0.447718 18.5703 1.00001 18.5703Z"
          fill="white"
        ></path>
      </svg>
      <div className={`mobile_nav ${openMobileNav ? "show" : "hide"}`}>
        <div className="mobile_nav_container">
          <p>Home</p>
          <p>ABOUT US</p>
          <p>TOUR 3D3N</p>
          <p>TOUR 4D4N</p>
          <p>DESTINATIONS</p>
          <p>BLOG</p>
          <p>FAQ</p>
          <p>CONTACT</p>
          <p>VIETNAM CHEERS HOTEL</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="close_nav_trigger"
            onClick={() => setOpenMobileNav(false)}
          >
            <path
              d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
              fill="#B34B1E"
            ></path>
            <path
              d="M17.1036 14.0001L21.2993 9.80449C21.4125 9.69129 21.5023 9.55689 21.5636 9.40896C21.6249 9.26103 21.6565 9.10247 21.6565 8.94235C21.6565 8.78222 21.6249 8.62366 21.5636 8.47573C21.5023 8.3278 21.4125 8.1934 21.2993 8.0802L19.92 6.70098C19.8068 6.58773 19.6724 6.49789 19.5245 6.43659C19.3766 6.3753 19.218 6.34375 19.0579 6.34375C18.8978 6.34375 18.7392 6.3753 18.5913 6.43659C18.4433 6.49789 18.3089 6.58773 18.1957 6.70098L14.0001 10.8966L9.80449 6.70098C9.69129 6.58773 9.55689 6.49789 9.40896 6.43659C9.26103 6.3753 9.10247 6.34375 8.94235 6.34375C8.78222 6.34375 8.62366 6.3753 8.47573 6.43659C8.3278 6.49789 8.1934 6.58773 8.0802 6.70098L6.70098 8.0802C6.58773 8.1934 6.49789 8.3278 6.43659 8.47573C6.3753 8.62366 6.34375 8.78222 6.34375 8.94235C6.34375 9.10247 6.3753 9.26103 6.43659 9.40896C6.49789 9.55689 6.58773 9.69129 6.70098 9.80449L10.8966 14.0001L6.70098 18.1957C6.58773 18.3089 6.49789 18.4433 6.43659 18.5913C6.3753 18.7392 6.34375 18.8978 6.34375 19.0579C6.34375 19.218 6.3753 19.3766 6.43659 19.5245C6.49789 19.6724 6.58773 19.8068 6.70098 19.92L8.0802 21.2993C8.1934 21.4125 8.3278 21.5023 8.47573 21.5636C8.62366 21.6249 8.78222 21.6565 8.94235 21.6565C9.10247 21.6565 9.26103 21.6249 9.40896 21.5636C9.55689 21.5023 9.69129 21.4125 9.80449 21.2993L14.0001 17.1036L18.1957 21.2993C18.3089 21.4125 18.4433 21.5023 18.5913 21.5636C18.7392 21.6249 18.8978 21.6565 19.0579 21.6565C19.218 21.6565 19.3766 21.6249 19.5245 21.5636C19.6724 21.5023 19.8068 21.4125 19.92 21.2993L21.2993 19.92C21.4125 19.8068 21.5023 19.6724 21.5636 19.5245C21.6249 19.3766 21.6565 19.218 21.6565 19.0579C21.6565 18.8978 21.6249 18.7392 21.5636 18.5913C21.5023 18.4433 21.4125 18.3089 21.2993 18.1957L17.1036 14.0001Z"
              fill="white"
            ></path>
          </svg>
          <div className="social">
            <img src="/assets/Frame 1000004303.png" alt="" />
            <img src="/assets/Frame 1000004304.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
