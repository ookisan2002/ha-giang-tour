import { useEffect, useRef } from "react";
import "./styles.css";

import AccordionElement from "./Accordion";

const Section5 = () => {
  const headerSection5 = useRef(null)
  const subHeaderSection5 = useRef(null)
    useEffect(() => {
      const observerForSection5 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      });
      [
        headerSection5.current,
        subHeaderSection5.current,
      ].forEach((el) => {
        observerForSection5.observe(el);
      });
      return () => {
        [
          headerSection5.current,
          subHeaderSection5.current,
        ].forEach((el) => {
          observerForSection5.unobserve(el);
        });
        observerForSection5.disconnect();
      };
    },[]);
  return (
    <div class="section5">
      <p ref={subHeaderSection5}>FAQ ABOUT</p>
      <h3 ref={headerSection5}>THE TRIP</h3>
      <div className="section5_content">
        <div className="column">
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
        </div>
        <div className="column">
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
          <AccordionElement
            trigger="Booking online term & condition"
            content="Flexibble Cancellation Policy. Your Privacy is Ensured. Upon successful booking, a confirmation will be promptly sent to your mail."
            className={'w-full accordion'}
          />
        </div>
      </div>
    </div>
  );
};
export default Section5;
