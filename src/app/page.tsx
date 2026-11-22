import  HeroCarrossel from "../components/HeroCarrossel";
import Header from "../components/Header";
import Home from "../components/Home";
import Services from "../components/Services";

export default function home() {
    return <>

    <HeroCarrossel/>
    <Header/>
    <Home/>
    <hr className="w-5/6 mx-auto p-2 border-zinc-800"/>
    <Services/>



    </>
      
       

    
}

