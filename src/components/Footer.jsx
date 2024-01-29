import { footerLinks, socialMedia } from "../constants";
import styles, { layout } from "../styles";

const LinkCard = ({ links }) => (
  <div className=" text-white text-center mt-2">
    <div className="flex-1 md:max-w-[350px]">
      <h2 className={styles.heading2}>
        Link-uri <span className="text-gradient">Utile</span>
      </h2>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.link}
              className="hover:text-cyan-400 font-poppins transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SocialMediaLinks = ({ socialMediaLinks }) => {
  return (
    <div className=" text-white text-center mt-2">
      <div className="flex-1">
        <h2 className={styles.heading2}>
          Social <span className="text-gradient">Media</span>
        </h2>

        <ul>
          {socialMediaLinks.map((socialLink) => (
            <li key={socialLink.id}>
              <div className="flex-1 group">
                <a
                  href={socialLink.link}
                  className={`${styles.flexCenter} group-hover:text-cyan-400 transition font-poppins mt-4`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={`${styles.flexCenter}  h-[20px] group-hover:bg-cyan-400 transition-all rounded-full blur relative left-[20px] z-0 p-2`}
                    src={socialLink.icon}
                    alt={`Social Media ${socialLink.id}`}
                  />
                  <img
                    className={`${styles.flexCenter} h-[20px] z-10 mr-2 `}
                    src={socialLink.icon}
                    alt={`Social Media ${socialLink.id}`}
                  />
                  {socialLink.title}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer = () => (
  <section id="footer" className="mt-20">
    <div className="flex justify-around flex-wrap">
      {footerLinks.map((card) => (
        <LinkCard key={card.title} title={card.title} links={card.links} />
      ))}
      <SocialMediaLinks socialMediaLinks={socialMedia} />
    </div>
    <span className="border-0 border-b-2 flex">asd</span>
    <p className="flex justify-center mt-4 text-white font-poppins">
    © {new Date().getFullYear()} | DiaDrive SRL Bacau
    </p>
  </section>
);

export default Footer;
