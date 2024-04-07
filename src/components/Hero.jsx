import styles from "../styles";
import { logobig } from "../assets";

const Hero = () => (
  <section id="home" className="flex flex-col justify-between sm:flex-row  mb-[100px] ">
    <div
      className=""
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-center sm:text-left text-white ss:leading-[100px] leading-[75px]">
          Școala de Șoferi <br className="sm:block hidden" />
          <span className="text-gradient">DiaDrive</span>
        </h1>  
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-center sm:text-left text-white ss:leading-[100px] leading-[75px] w-full">
        Bacău
      </h1>
      <p className={`${styles.paragraph} text-justify max-w-[470px] mt-5`}>
      <span className="text-gradient font-semibold">"Succesul nu este întotdeauna despre măreție, ci despre consistență." </span>
      </p>
    </div>
    <div className="flex justify-center items-center">
      <img src={logobig} alt="logo" className="sm:w-[400px] w-[70%]" />
    </div>
  </section>
);

export default Hero;
