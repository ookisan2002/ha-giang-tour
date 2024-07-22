import { forwardRef, useEffect, useRef, useState } from "react";
import "./styles.css";
const InforPart = forwardRef((props, ref) => {
    const seeMore = useRef(null)
    const [content, setContent] = useState('SEE LESS');
    const onColappse= ()=>{
        seeMore.current.classList.toggle("active")
        ref.current.classList.toggle("active")
        setContent(prevContent => (prevContent === 'SEE MORE' ? 'SEE LESS' : 'SEE MORE'));
    }
  return (
    <>
        <div className="infor_part" id="infor_part" ref={ref}>
        <div>
            <h3>
            <img src="assets/Group (2).svg" alt="" />
            HIGHT LIGHT:
            </h3>
            <ul>
            <li>Off the beaten track</li>
            <li>Motobike tour with local driver</li>
            <li>Meeting more new friends</li>
            <li>Try Vietnam cuisine</li>
            <li>Meditation/ swimming on waterfall</li>
            <li>Family Dinner and more</li>
            </ul>
        </div>
        <div>
            <h3>
            <img
                src="/assets/Search results for Bus - Flaticon-12 1.svg"
                alt=""
            />
            TRANSPORT:
            </h3>
            <p>Sleeper bus & Motorbike with Local easy rider</p>
        </div>
        <div>
            <h3>
            <img
                src="/assets/Search results for Location - Flaticon-12 1.svg"
                alt=""
            />
            PICK UP FROM:
            </h3>
            <p>
            Hanoi, Airport, Sapa, Cat ba island, Ninh Binh or any hotel in Ha
            Giang city
            </p>
        </div>
        <div>
            <h3>
            <img src="/assets/circle.svg" alt="" />
            INCLUDED:
            </h3>
            <ul>
            <li>Off the beaten track</li>
            <li>Motobike tour with local driver</li>
            <li>Meeting more new friends</li>
            <li>Try Vietnam cuisine</li>
            <li>Meditation/ swimming on waterfall</li>
            <li>Family Dinner and more</li>
            </ul>
        </div>
        <div>
            <h3>
            <img src="/assets/tick.svg" alt="" />
            EXCLUDED:
            </h3>
            <ul>
            <li>Off the beaten track</li>
            <li>Motobike tour with local driver</li>
            </ul>
        </div>
        </div>
        <div className="seeMore" ref={seeMore} onClick={onColappse}>
            <p>{content}</p>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            >
            <path
                d="M5.50532 3.09381L2.34118 6.25781C2.18058 6.41858 1.98415 6.49878 1.75192 6.49878C1.51971 6.49878 1.32337 6.41856 1.16278 6.25781L0.674422 5.76961C0.513885 5.6091 0.433594 5.41264 0.433594 5.1805C0.433594 4.94836 0.513885 4.752 0.674422 4.59123L4.91279 0.346412C5.0734 0.185783 5.26981 0.105469 5.50206 0.105469C5.73431 0.105469 5.93056 0.185761 6.09124 0.346412L10.3296 4.59121C10.4902 4.75198 10.5705 4.94832 10.5705 5.18048C10.5705 5.41264 10.4902 5.60907 10.3296 5.76959L9.84134 6.25779C9.68082 6.41856 9.48551 6.49876 9.25535 6.49876C9.02538 6.49876 8.82787 6.41853 8.66296 6.25779L5.50532 3.09381Z"
                fill="#B34B1E"
            />
            </svg>
        </div>
    </>
  );
});
export default InforPart;
