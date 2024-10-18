import { Container } from "react-bootstrap";
import style from "@/styles/Footer.module.css";

export default function Footer(){
    return (
        <>
    <Container>
        <footer className= {`${style.footerGradiente} my-3 bg-success border-2 border border-success-subtle rounded rouded-3` }>
            <ul className= "nav justify-content-center border-bottom border-1 border-success-subtle">
                <li>Disciplina de Frameworks 2</li>
            </ul>
            <p className= "text-center">&copy; 2024 - IFMS</p>
        </footer> 
        
        </Container> 
        </>
    );
}