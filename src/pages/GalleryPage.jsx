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
 
    <h1 className='border-b-2 border-neonPink text-center ss:text-[30px] text-neonPink font-bold w-fit mx-auto my-10'>Flota Auto -<span className="text-gradient"> Dia Drive</span></h1>
    <Gallery className='' />
  
  
</section>
</>
)

export default GalleryPage;