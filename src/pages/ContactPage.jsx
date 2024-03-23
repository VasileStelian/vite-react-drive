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
    <section className="">
      <div className="z-10 rounded-2xl pb-6">
        <Contact />
        <Map />
      </div>
     
    </section>
  </>
);

export default ContactPage;
