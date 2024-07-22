import { useEffect, useRef, useState } from "react";
import "./styles.css";

const LocalNav = ({infor_ref,section2_ref,section3_ref,section4_ref}) => {
    const [section,setSection] = useState("infor")
    console.log(infor_ref)
      useEffect(() => {
        const handleIntersection = (entries) => {
          let closestEntry = null;
    
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (!closestEntry || entry.boundingClientRect.top < closestEntry.boundingClientRect.top) {
                closestEntry = entry;
              }
            }
          });
    
          if (closestEntry) {
            if(closestEntry.target.classList.contains('infor_part')){
                setSection("infor")
            } else if(closestEntry.target.classList.contains('section2_container')){
                setSection("section2")
            } else if(closestEntry.target.classList.contains('section3')){
              setSection("section3")
            } else if(closestEntry.target.classList.contains('section4')){
              setSection("section4")
            }
          }
        };
    
        const observer = new IntersectionObserver(handleIntersection, {
          root: null,
          rootMargin: '0px',
          threshold: [0, 0.25, 0.5, 0.75, 1.0]
        });
    
        [infor_ref.current,section2_ref.current,section3_ref.current,section4_ref.current].forEach(ref => {
          if (ref) observer.observe(ref);
        });
    
        return () => {
          [infor_ref.current,section2_ref.current,section3_ref.current,section4_ref.current].forEach(ref => {
            if (ref) observer.unobserve(ref);
          });
        };
      }, []);
  return (
    <div class="local_nav">
        <a className={`${section == "infor" ?'active' :""}`} href="#infor_part" >Information</a>
        <a className={`${section == "section2" ?'active' :""}`} href="#section2_container" >Map</a>
        <a className={`${section == "section3" ?'active' :""}`} href="#section3" >Trip detail</a>
        <a className={`${section == "section4" ?'active' :""}`} href="#section4" >Book online</a>
    </div>
  );
};
export default LocalNav;
