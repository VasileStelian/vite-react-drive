import { Helmet } from "react-helmet";
import { Gallery } from "../components";


const GalleryPage = () => (
  <>
  <Helmet>
    <title>
      Galerie Foto | DiaDrive
    </title>
    <meta name="description" content="Aici puteti vizualiza toată flota noastră auto!" />
  </Helmet>
    <section className="">
  <div className="relative rounded-2xl">
    <h1 className=' ss:text-[30px] text-white font-bold text-center font-poppins my-10'>Flota Auto -<span className="text-gradient-reverse"> Dia Drive</span></h1>
    <Gallery className='' />
  </div>
  
</section>
</>
)

export default GalleryPage;