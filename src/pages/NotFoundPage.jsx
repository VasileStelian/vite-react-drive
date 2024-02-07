import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';


const NotFoundPage = () =>(
    <>
    <Helmet>
        <title>
            Pagina nu există | DiaDrive
        </title>
        <meta name="description" content="Scoala de soferi DiaDrive | Categ. B B1 B special BE C CE D DE" />
    </Helmet>
    <div className="flex min-h-screen text-white font-poppins flex-col text-center justify-center items-center gap-9  p-7">
        <h1 className="text-[27.7px]">Eroare <span className="text-gradient  font-semibold">404</span></h1>
        <h2 className="text-[27.7px]">Pagina nu a fost <span className="text-gradient font-semibold">Gasita</span></h2>
        <button className="bg-cyan-400/30 hover:bg-cyan-400 hover:text-black w-[100px] rounded-full "><Link to="/">Acasa</Link></button>
    </div>
    </>
)

export default NotFoundPage;