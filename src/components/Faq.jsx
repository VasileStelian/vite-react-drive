import { faq } from "../constants";
import { useState, useRef, useEffect } from "react";
import styles from "../styles";


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
      className="flex p-3 rounded-[20px] ss:bg-black/30 bg-dimBlue hover:bg-black/80 transition mb-4 cursor-pointer"
    >
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center ">
          <h4 className="font-poppins font-semibold text-white text-[20px] mb-2">
            {title}
          </h4>
          <svg className={`transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition flex-shrink-0 w-[30px]`} clipRule="evenodd" fill="#fe4875" fillRule="evenodd" strokeLinejoin="round"  strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm4.845 6.711c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z" fillRule="nonzero"/></svg>
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
  <section id="faqs" className="flex mt-10 flex-col">
    <div className="md:w-[70%] md:mx-auto">
      <h2 className="font-semibold xs:text-[48px] text-[40px] text-neonPink xs:leading-[50.8px] leading-[66.8px] w-fit mx-auto text-5xl font- border-b-2 border-neonPink text-center ">
        Întrebări <span className="text-gradient">frecvente</span>
      </h2>
      <p className={`${styles.paragraph}  my-5 text-justify`}>
        Atunci când suntem pregătiți să demarăm cursurile la școala de șoferi,
        ne lovim de numeroase întrebări pentru care căutăm răspunsuri.{" "}
        <span className="text-gradient font-bold">
          Cele enumerate sunt doar câteva dintre cele mai întâlnite. Dacă aveți
          altele, vă rugăm să nu ezitați să ne contactați!
        </span>
      </p>
      <div className="ss:grid">
          {[...faq].map((faq) => (
            <FaqCard key={faq.id} {...faq} />
          ))}
        </div>
    </div>
   
      
        
    
  

    {/* <div className="md:w-[350px] hidden md:block ">
      <h2 className={`${styles.heading3} md:text-right`}>
        Întrebări <span className="text-gradient">frecvente</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        Atunci când suntem pregătiți să demarăm cursurile la școala de șoferi,
        ne lovim de numeroase întrebări pentru care căutăm răspunsuri.
      </p>
    </div> */}
  </section>
);

export default Faq;
