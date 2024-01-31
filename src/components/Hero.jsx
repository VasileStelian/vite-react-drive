import styles from "../styles";
import { logobig } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Școală de Șoferi <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Dia Drive</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 z-10">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Bacău
      </h1>
      <p className={`${styles.paragraph} text-justify max-w-[470px] mt-5`}>
      <span className="text-gradient font-semibold">"Succesul nu este întotdeauna despre măreție, ci despre consistență." </span>

Cu sprijinul instructorilor noștri profesioniști, vei ajunge să conduci mașina singur într-un mod încrezător și priceput.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={logobig} alt="logo" className="w-full relative z-[5]" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden  ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
