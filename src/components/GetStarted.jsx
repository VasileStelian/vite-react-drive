import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="/contact">
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient  p-1 cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-slate-800 hover:bg-black transition-colors w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
            <span className="text-gradient">Înscrie-te</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Acum!</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;
