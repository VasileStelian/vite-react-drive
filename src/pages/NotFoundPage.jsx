

const NotFoundPage = () =>(
    <div className="flex min-h-screen text-white font-poppins flex-col text-center justify-center items-center gap-9  p-7">
        <h1 className="text-[27.7px]">Eroare <span className="text-gradient  font-semibold">404</span></h1>
        <h2 className="text-[27.7px]">Pagina nu a fost <span className="text-gradient font-semibold">Gasita</span></h2>
        <button className="bg-cyan-400/30 hover:bg-cyan-400 hover:text-black w-[100px] rounded-full "><a href="/">Acasa</a></button>
    </div>
)

export default NotFoundPage;