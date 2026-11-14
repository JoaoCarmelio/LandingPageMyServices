export default function Header() {
    return (
        <nav className="">
            <div className="w-full bg-[#172554] p-2">
                <ul className="flex justify-between  divide-x divide-slate-500 [&>li]:flex-1 [&>li]:text-center [&>li]:text-xl">
                    <li className=""><a href='#'>Inicio</a></li>
                    <li><a href='#'>Serviços</a></li>
                    <li><a href='#'>Sobre</a></li>
                    <li><a href='#'>Contatos</a></li>
                </ul>
            </div>
        </nav>
    )
}