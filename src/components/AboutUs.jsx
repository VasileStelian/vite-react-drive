import styles from "../styles";

const AboutUs = () => (
  <div className="relative p-2 flex justify-center items-center z-50">
    <div className="flex rounded-lg  px-4 flex-col md:w-[70%] sm:w-[700px] text-justify">
      <h1 className={`${styles.heading2} text-center`}>
        Despre <span className="text-gradient">noi</span>
      </h1>
      <p className={`${styles.paragraph}`}>
      Poate ai dorința să obții mai multe informații despre cine suntem și de ce am putea fi adecvați să te îndrumăm în procesul de obținere a permisului de conducere pentru categoriile
        <span className="font-bold text-neonPink"> A B BE C CE D DE.</span>{" "}
      </p>

      <div>
        <h1 className={`${styles.heading2} text-center`}>Cine <span className="text-gradient">suntem?</span></h1>
        <p className={`${styles.paragraph}`}>
          În anul 2005, a luat naștere școala de șoferi <span className="text-gradient font-bold">Dia Drive</span> în Bacău.
          Aceasta funcționează cu susținerea, devotamentul și efortul unor
          instructori și profesori de legislație cu o vastă experiență în
          domeniu, caracterizați de răbdare și pasiune pentru munca lor.
          <span className="text-neonPink font-bold"> Profesionalismul</span> nostru se evidențiază prin rezultatele <span className="text-gradient font-bold">remarcabile </span> 
          obținute în pregătirea viitorilor conducători auto, situându-ne în
          topul școlilor de profil din acest județ, cu un <span className="text-neonPink font-bold">procentaj
          semnificativ.</span>
        </p>
        <h1 className={`${styles.heading2} text-center`}>Cu ce <span className="text-gradient">ne mândrim</span></h1>
        <p className={`${styles.paragraph}`}>
        Sub titlul <span className="font-semibold text-neonPink">"Cu ce ne Mândrim"</span>, școala de șoferi <span className="text-neonPink font-semibold">Dia Drive</span> din Bacău reprezintă un <span className="font-semibold text-neonPink">pionierat</span> în domeniul oferirii suportului special pentru persoanele cu dizabilități în obținerea permisului de conducere în Regiunea Moldovei. Suntem printre <span className="font-semibold text-gradient">primele</span>, dacă nu chiar <span className="font-semibold text-gradient">prima școală de șoferi</span> din această regiune, care investește în adaptări auto avansate pentru a facilita și încuraja participarea activă a persoanelor cu <span className="font-semibold text-gradient">nevoi speciale.</span> Flota noastră auto, echipată cu tehnologii precum accelerare la mână, accelerare cu piciorul stâng, mașini automate, etc. reflectă angajamentul nostru ferm față de incluziune și accesibilitate. Ne mândrim cu faptul că deschidem noi orizonturi pentru comunitatea noastră, <span className="font-semibold text-neonPink">asigurându-ne că fiecare cursant are șansa să își îndeplinească visul de a conduce.</span>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
