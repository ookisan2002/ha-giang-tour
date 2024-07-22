import Section2 from "../components/Section2";
import Banner from "../components/Banner";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Navigation from "@/components/Navigation";
import SideControl from "@/components/SideControl";
import LocalNav from "@/components/LocalNav";
import { useRef } from "react";
import InforPart from "@/components/InformationPart";

const TourDetail = () => {
  const infor_ref = useRef(null)
  const section2_ref = useRef(null)
  const section3_ref = useRef(null)
  const section4_ref = useRef(null)
  return (
    <>
      <SideControl/>
      <Navigation/>
      <Banner />
      <LocalNav infor_ref={infor_ref} section2_ref={section2_ref} section3_ref={section3_ref} section4_ref={section4_ref}/>
      <InforPart ref={infor_ref}/>
      <Section2 ref={section2_ref}/>
      <Section3 ref={section3_ref}/>
      <Section4 ref={section4_ref}/>
      <Section5 />
      <Section6 />
    </>
  );
};
export default TourDetail;
