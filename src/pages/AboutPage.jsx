import { AboutUs, NumberCounter } from "../components";
import { Helmet } from "react-helmet";
import styles from "../styles";

const AboutPage = () => (
  <>
    <Helmet>
      <title>Despre Noi | DiaDrive</title>
      <meta name="description" content="Poate ai dorința să obții mai multe informații despre cine suntem și de ce am putea fi adecvați să te îndrumăm în procesul de obținere a permisului de conducere pentru categoriile A B BE C CE D DE." />
    </Helmet>
    <div className="relative ">
      <AboutUs />
      <div className="relative z-50 flex flex-col md:flex-row md:gap-40  justify-center gap-3  text-white p-6 font-poppins">
        <div className="flex justify-center flex-col">
          <h1 className="text-center text-neonPink text-[20.7px] font-semibold">
            Cateva Cife
          </h1>
          <h2 className={`${styles.paragraph} text-center`}>
            De la infiintare
          </h2>
        </div>
        <div className="flex items-center flex-col">
          <NumberCounter targetNumber={3000} speed={1} />
          <h1 className={`${styles.paragraph} text-center`}>
            Sesiuni de Legislatie
          </h1>
        </div>
        <div className="flex items-center flex-col">
          <NumberCounter targetNumber={10} speed={50} />
          <h1 className={`${styles.paragraph} text-center`}>Instructori</h1>
        </div>
        <div className="flex items-center flex-col">
          <NumberCounter targetNumber={5000} speed={1} />
          <h1 className={`${styles.paragraph} text-center`}>
            Cursanti Promovati
          </h1>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;
