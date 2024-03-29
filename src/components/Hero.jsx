import styles from "../styles";
import { logobig } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Școala de Șoferi <br className="sm:block hidden" />{" "}
          <span className="text-gradient">DiaDrive</span>
        </h1>  
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Bacău
      </h1>
      <p className={`${styles.paragraph} text-justify max-w-[470px] mt-5`}>
      <span className="text-gradient font-semibold">"Succesul nu este întotdeauna despre măreție, ci despre consistență." </span>
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={logobig} alt="logo" className="w-full relative z-[5]" />
    </div>
  </section>
);

export default Hero;
