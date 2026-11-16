export default function Header() {
    return (
        <nav className=" bg-[#0a66df]">
            <div className="w-full p-2 flex-1 [&>li]:text-center [&>li]:text-xl">
                <ul className="flex justify-between  divide-x divide-slate-100 [&>li]:flex-1 [&>li]:text-center [&>li]:text-xl ">
                    <li className="duration-150 active:scale-90 active:text-cyan-90"><a href='www.youtube.com.br'>Inicio</a></li>
                    <li><a href='#'>Serviços</a></li>
                    <li><a href='#'>Sobre</a></li>
                    <li><a href='#'>Contatos</a></li>
                </ul>
            </div>
        </nav>
    )
}