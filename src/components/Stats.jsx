import { stats } from "../constants";
import styles from "../styles";

const StatsCard = ({ title, icon, content }) => (
  <div className=" text-white text-center mt-2">
    <div className="flex-1 md:max-w-[350px]">
      <img className="mx-auto h-[50px]" alt="" src={icon} />
      <h2 className={styles.heading2}>{title}</h2>
      <p className={`${styles.paragraph} `}>{content}</p>
    </div>
  </div>
);

const Stats = () => (
  <section id="categories" className="flex-1 mt-5">
    <div className="flex flex-col md:justify-between justify-center flex-wrap">
      {[...stats].map((stats) => (
        <StatsCard key={stats.id} {...stats} />
      ))}
    </div>
  </section>
);

export default Stats;
