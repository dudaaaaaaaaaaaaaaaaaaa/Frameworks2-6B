import Menu from "./component/navbar";
import { Container } from "react-bootstrap";
import Footer from "./component/footer";
import { useState } from "react";
export default function Promisse(){
   const[prometido, setPrometido] = useState("")
    setTimeout(()=>{
        setPrometido("é uma dívida")
        document.title="promessa é dívida"
    }, 2000);
    return <>
    <Menu/>
    <Container>
        Promessa { prometido === ""? "<carregando>": prometido} 
    </Container>
    <Footer/>

    </>
}