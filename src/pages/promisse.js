import Menu from "./component/navbar";
import { Container } from "react-bootstrap";
import Footer from "./component/footer";
import { useEffect, useState } from "react";
export default function Promisse(){
   const[prometido, setPrometido] = useState("");
   useEffect(()=>{
    setTimeout(async ()=>{
        const altera= await mudaTexto("olá, texto novo")
        setPrometido(altera);
        document.title="promessa é dívida"
    }, 4000);
   })
    
    return <>
    <Menu/>
    <Container>
        Promessa { prometido === ""? <img src="./fbc00f81999693.5d10c08723f94.gif" width={80} hight={40}/>: prometido} 
    </Container>
    <Footer/>

    </>
}
function mudaTexto(texto){
   return new Promise((resolva)=>
    setTimeout(()=>{
    resolva(texto);
    },1000))
    
}
