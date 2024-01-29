import { Categories, Faq, Hero, Stats } from "../components";



const Homepage = () => (
    <section className="p-4">
        <Hero />
        <Categories />
        <Faq />
        <Stats />
    </section>
);

export default Homepage;