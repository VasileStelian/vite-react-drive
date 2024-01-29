import styles from "../styles";

const AboutUs = () => (
  <div className="relative p-2 flex justify-center items-center z-50">
    <div className="flex bg-black/30 rounded-lg hover:bg-black px-4 flex-col w-[700px] text-justify">
      <h1 className={`${styles.heading2} text-center`}>
        Despre <span className="text-gradient">noi</span>
      </h1>
      <p className={`${styles.paragraph}`}>
      Poate ai dorința să obții mai multe informații despre cine suntem și de ce am putea fi adecvați să te îndrumăm în procesul de obținere a permisului de conducere pentru categoriile
        <span className="font-bold text-gradient"> A B BE C CE D DE.</span>{" "}
      </p>

      <div>
        <h1 className={`${styles.heading2} text-center`}>Cine <span className="text-gradient">suntem?</span></h1>
        <p className={`${styles.paragraph}`}>
          În anul 2005, a luat naștere școala de șoferi <span className="text-gradient font-bold">Dia Drive</span> în Bacău.
          Aceasta funcționează cu susținerea, devotamentul și efortul unor
          instructori și profesori de legislație cu o vastă experiență în
          domeniu, caracterizați de răbdare și pasiune pentru munca lor.
          Profesionalismul nostru se evidențiază prin rezultatele remarcabile
          obținute în pregătirea viitorilor conducători auto, situându-ne în
          topul școlilor de profil din acest județ, cu un procentaj
          semnificativ.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
