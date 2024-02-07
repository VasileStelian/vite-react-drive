import { Contact, Map } from "../components";
import { Helmet } from "react-helmet";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contactează-ne | DiaDrive</title>
      <meta
        name="description"
        content="Inscrie-te acum!
Acesta este primul pas pentru obținerea permisului de conducere! Ce mai aștepți?"
      />
    </Helmet>
    <section className="relative min-h-screen">
      <div className="relative z-10 bg-black/10 rounded-2xl pb-6">
        <Contact />
        <Map />
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[70%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute w-[40%] h-[40%] rounded-full bottom-40 white__gradient" />
      </div>
    </section>
  </>
);

export default ContactPage;
