import { Helmet } from "react-helmet";
import { Categories, Faq, Hero, Stats } from "../components";



const Homepage = () => (
    <>
    <Helmet>
        <title>
            Acasă | DiaDrive
        </title>
        <meta name="description" content="Scoala de soferi DiaDrive | Categ. B B1 B special BE C CE D DE" />
    </Helmet>
    <section className="p-4">
        <Hero />
        <Categories />
        <Faq />
        <Stats />
    </section>
    </>
);

export default Homepage;