import { AboutUs, NumberCounter } from "../components";
import styles from "../styles";



const AboutPage = () => (
    <div className="relative min-h-screen">
        <AboutUs />
        <div className="relative z-50 flex flex-col md:flex-row md:gap-40  justify-center gap-3  text-white bg-black/40 p-6 font-poppins">
        <div className="flex justify-center flex-col"> 
            <h1 className="text-center text-[20.7px] font-semibold">Cateva Cife</h1>
            <h2 className={`${styles.paragraph} text-center`}>De la infiintare</h2>
        </div>
         <div className="flex items-center flex-col"> 
        <NumberCounter targetNumber={3000} speed={5} />
        <h1 className={`${styles.paragraph} text-center`}>Sesiuni de Legislatie</h1>
        </div>
        <div className="flex items-center flex-col">  
        <NumberCounter targetNumber={10} speed={50}/>
        <h1 className={`${styles.paragraph} text-center`}>Instructori</h1>
        </div>
        <div className="flex items-center flex-col">  
        <NumberCounter targetNumber={5000} speed={1}/>
        <h1 className={`${styles.paragraph} text-center`}>Cursanti Promovati</h1>
        </div> 
        </div>
        <div className="absolute inset-0 hidden md:block z-0">
        <div className="absolute w-[70%] h-[50%] right-20 bottom-20 blue__gradient" />
    <div className="absolute w-[40%] h-[40%] rounded-lg  white__gradient" />
  </div>
    </div>
);


export default AboutPage;