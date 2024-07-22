import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionElement = ({trigger,content,className}) => {
  //   useEffect(() => {
  //     var subHeaderForTripDetail = document.querySelector(".section3 h3");
  //     var headerForTripDetail = document.querySelector(".section3 p");
  //     var articleTitleForTripDetail = document.querySelectorAll(".title");
  //     var articleForTripDetail = document.querySelectorAll(
  //       ".article_paragraph p"
  //     );
  //     var time = document.querySelectorAll(".article_header h3");
  //     const observerForTripDetail = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("appear");
  //         }
  //       });
  //     });
  //     [
  //       subHeaderForTripDetail,
  //       headerForTripDetail,
  //       ...articleTitleForTripDetail,
  //       ...articleForTripDetail,
  //       ...time,
  //     ].forEach((el) => {
  //       observerForTripDetail.observe(el);
  //     });
  //     return () => {
  //       [
  //         subHeaderForTripDetail,
  //         headerForTripDetail,
  //         ...articleTitleForTripDetail,
  //         ...articleForTripDetail,
  //         ...time,
  //       ].forEach((el) => {
  //         observerForTripDetail.unobserve(el);
  //       });
  //       observerForTripDetail.disconnect();
  //     };
  //   });
  return (
    <Accordion type="single" collapsible className={className}>
      <AccordionItem value="item-1">
        <AccordionTrigger>I{trigger}</AccordionTrigger>
        <AccordionContent>
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionElement;
