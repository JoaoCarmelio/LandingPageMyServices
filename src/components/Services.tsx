import { text } from "node:stream/consumers"

const services = [
    {title:'Otimização de PC', text:'Deixo seu computador mais rápido e estável, com ajustes no sistema e nos programas.'},
    {title:'Formatação e Windows',text: 'Instalação limpa do sistema, com drivers e programas essenciais.'},
    {title:'Troca de peças', text:'Troca de HD, SSD, memória e outras peças, feita com cuidado.'},
    {title:'Montagem e Manutenção', text:'Montagem de computadores e Resolução de problemas'},
];

export default function Services() {
  return <>
    
        <section className="px-4 py-12 ">
            <h2 className="text-center font-bold mt-[-50] text-2xl mb-12">SERVIÇOS</h2>
            
            <div className="mx-auto max-w-md flex flex-col gap-6">
                {services.map((service) => (
                    <div key={service.title} className="flex flex-col w-full  px-4 py-6 
                     border-2.5 shadow-md shadow-blue-900 bg-zinc-900 rounded-2xl cursor-pointer 
                     transition duration-300 ease-in-out hover:scale-105 active:scale-105  ">

                        <h2 className="text-center mb-4 font-bold text-lg underline decoration-blue-900 decoration-2 underline-offset-4">{service.title}</h2>
                        

                        <p className="p-2 text-center text-lg">{service.text}</p>



                    </div>
                    
                ))}

               
              
            </div> 
            <a href="#" className="mx-auto block w-fit mt-8 px-20 py-4 border rounded-3xl font-bold text-lg  bg-green-500 ">WHATSAPP</a>

        </section>
 </>
}