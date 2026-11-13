export default function Header() {
    return (
        <nav className="">
            <div className="w-full bg-[#172554] p-4">
                <ul className="flex justify-between  divide-x divide-slate-400 p-2 [&>li]:flex-1 [&>li]:text-center ">
                    <li className=""><a href='#'>Inicio</a></li>
                    <li><a href='#'>Serviços</a></li>
                    <li><a href='#'>Sobre</a></li>
                    <li><a href='#'>Contatos</a></li>
                </ul>
            </div>
        </nav>
    )
}