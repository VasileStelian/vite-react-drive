import {Categories} from "../components"
import { Helmet } from "react-helmet";


const CategoriesPage = () => (
<>
    <Helmet>
    <title>
      Categorii | DiaDrive
    </title>
    <meta name="description" content="Aici puteti vizualiza toate categoriile noastră !" />
  </Helmet>

    <section className="p-6">
    <Categories/>
    </section>
</>
)

export default CategoriesPage;