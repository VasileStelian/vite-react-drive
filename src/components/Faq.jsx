import { faq } from "../constants";
import { useState, useRef, useEffect } from "react";
import styles, { layout } from "../styles";
import { arrowUp } from "../assets";

const FaqCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = isOpen
      ? `${contentRef.current.scrollHeight}px`
      : "0";
  }, [isOpen]);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={toggleCard}
      className={`flex p-3 rounded-[20px] ss:bg-black/30 bg-dimBlue hover:bg-black/80 transition mb-4 cursor-pointer`}
    >
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center ">
          <h4 className="font-poppins font-semibold text-white text-[20px] mb-2">
            {title}
          </h4>
          <img
            src={arrowUp}
            className={`transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition`}
          />
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-max-height duration-300"
        >
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] text-justify">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => (
  <section id="faqs" className={`${layout.section}`}>
    <div className="md:w-[350px] md:hidden ">
      <h2 className={`${styles.heading3} md:text-right`}>
        Întrebări <span className="text-gradient">frecvente</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        Atunci când suntem pregătiți să demarăm cursurile la școala de șoferi,
        ne lovim de numeroase întrebări pentru care căutăm răspunsuri.{" "}
        <span className="text-gradient font-bold">
          Cele enumerate sunt doar câteva dintre cele mai întâlnite. Dacă aveți
          altele, vă rugăm să nu ezitați să ne contactați!
        </span>
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <div className="ss:grid flex-1 flex-col mr-5 z-0">
        <div className="z-[5]">
          {[...faq].map((faq) => (
            <FaqCard key={faq.id} {...faq} />
          ))}
        </div>
        <div className="hidden ss:block">
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
    </div>

    <div className="md:w-[350px] hidden md:block ">
      <h2 className={`${styles.heading3} md:text-right`}>
        Întrebări <span className="text-gradient">frecvente</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        Atunci când suntem pregătiți să demarăm cursurile la școala de șoferi,
        ne lovim de numeroase întrebări pentru care căutăm răspunsuri.
      </p>
    </div>
  </section>
);

export default Faq;
