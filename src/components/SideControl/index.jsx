import { useEffect, useRef, useState } from "react";
import "./styles.css";

const SideControl = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const svgRef = useRef(null);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / windowHeight) * 100;
        setScrollProgress(scrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const svg = svgRef.current;
      const rect = svg.querySelector('rect');
      const dashArray = rect.getTotalLength();
      const dashOffset = dashArray - (scrollProgress / 100) * dashArray;
      rect.style.strokeDasharray = dashArray;
      rect.style.strokeDashoffset = dashOffset;
    }, [scrollProgress]);
  return (
    <div class="side_control">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        ref={svgRef}
        className="cursor-pointer scroll_top_btn"
        onClick={scrollToTop}
      >
        <path
          d="M19.8438 7.64502C19.5629 6.78499 18.4371 6.78499 18.1562 7.64502L14.0518 20.2088C13.8463 20.8378 14.2782 21.4973 14.8956 21.4973L23.1044 21.4973C23.7218 21.4973 24.1537 20.8378 23.9482 20.2088L19.8438 7.64502Z"
          fill="#FC692A"
          className="translate-y-[10%]"
        ></path>
        <rect
          x="0.5"
          y="0.5"
          width="37"
          height="37"
          rx="18.5"
          stroke="#FC692A"
          stroke-dasharray="116"
          stroke-dashoffset="116"
            style={{strokeDashoffset:"1px"}}

        ></rect>
      </svg>
      <div className="book_btn">BOOK NOW</div>
      <div className="call_btn">
        <div className="spread"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <rect width="50" height="50" rx="25" fill="#CECECE"></rect>
          <path
            d="M5.90234 44.1105L8.5994 34.2747C6.93967 31.3985 6.06266 28.1262 6.06266 24.7878C6.06266 14.3202 14.5876 5.80469 25.0458 5.80469C30.1287 5.80469 34.891 7.78505 38.4745 11.3686C42.058 14.9521 44.0289 19.7238 44.0289 24.7973C44.0289 35.2649 35.504 43.7804 25.0458 43.7804H25.0364C21.8584 43.7804 18.7369 42.9788 15.9644 41.47L5.90234 44.1105Z"
            fill="#E56026"
          ></path>
          <path
            d="M5.21484 44.7943L8.00621 34.6096C6.28989 31.6296 5.37516 28.2441 5.38459 24.7832C5.38459 13.9384 14.2113 5.12109 25.0561 5.12109C30.3182 5.12109 35.2597 7.16746 38.9658 10.883C42.6813 14.5985 44.7277 19.54 44.7183 24.7927C44.7183 35.6375 35.8915 44.4548 25.0467 44.4548H25.0373C21.7461 44.4548 18.5115 43.6249 15.6353 42.0595L5.21484 44.7943ZM16.1257 38.4948L16.7198 38.8532C19.2282 40.3432 22.1045 41.1259 25.0373 41.1353H25.0467C34.0526 41.1353 41.3894 33.808 41.3894 24.7927C41.3894 20.4264 39.6919 16.3243 36.6082 13.2311C33.5245 10.138 29.4129 8.44055 25.0467 8.44055C16.0314 8.44055 8.69462 15.7679 8.69462 24.7832C8.69462 27.8669 9.55277 30.8752 11.1936 33.4779L11.5803 34.1003L9.92998 40.1263L16.1257 38.4948Z"
            fill="white"
          ></path>
          <path
            d="M20.1321 16.5535C19.7643 15.733 19.3777 15.7142 19.0287 15.7047C18.7458 15.6953 18.4158 15.6953 18.0857 15.6953C17.7557 15.6953 17.2276 15.8179 16.7749 16.3083C16.3223 16.7987 15.0586 17.9869 15.0586 20.4105C15.0586 22.8246 16.8221 25.1633 17.0672 25.4934C17.3124 25.8234 20.4716 30.9441 25.4602 32.915C29.6095 34.5559 30.4582 34.2258 31.3541 34.1409C32.2594 34.0561 34.2586 32.9527 34.6736 31.8022C35.0791 30.6517 35.0791 29.671 34.9565 29.4635C34.8339 29.256 34.5038 29.1335 34.0134 28.8883C33.5231 28.6431 31.1089 27.4549 30.6563 27.2851C30.2036 27.1154 29.8736 27.0399 29.5529 27.5303C29.2229 28.0207 28.2798 29.124 27.9969 29.4541C27.714 29.7841 27.4217 29.8219 26.9313 29.5767C26.4409 29.3315 24.8567 28.8128 22.98 27.1342C21.5183 25.8329 20.5282 24.2203 20.2452 23.7299C19.9623 23.2395 20.217 22.9755 20.4621 22.7303C20.679 22.5134 20.9525 22.1551 21.1977 21.8721C21.4429 21.5892 21.5278 21.3818 21.6881 21.0517C21.8484 20.7216 21.7729 20.4387 21.6504 20.1936C21.5278 19.9484 20.5659 17.5248 20.1321 16.5535Z"
            fill="white"
          ></path>
          <circle cx="44" cy="6" r="6" fill="#14FF00"></circle>
        </svg>
      </div>
    </div>
  );
};
export default SideControl;
