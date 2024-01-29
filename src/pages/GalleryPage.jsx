import { Gallery } from "../components";


const GalleryPage = () => (
    <section className="relative min-h-screen">
  <div className="relative z-20 bg-black/30 rounded-2xl">
    <h1 className=' ss:text-[30px] text-white font-bold text-center font-poppins my-10'>Flota Auto -<span className="text-gradient-reverse"> Dia Drive</span></h1>
    <Gallery className='' />
  </div>
  <div className="absolute inset-0 z-0">
    <div className="absolute w-[100%] h-[35%] top-0 pink__gradient" />
    <div className="absolute w-[40%] h-[40%] rounded-full bottom-40 white__gradient" />
    <div className="absolute w-[100%] h-[50%] right-20 bottom-20 blue__gradient" />
  </div>
</section>
)

export default GalleryPage;