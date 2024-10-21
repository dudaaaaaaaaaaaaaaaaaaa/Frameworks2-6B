import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function noticias(){
    var produtos= [
        {
            id: 1,
            produto: "Cafeteira Elétrica",
            descricao: "Cafeteira elétrica com capacidade para 12 xícaras, ideal para quem aprecia um bom café a qualquer hora do dia."
        },
        {
            id: 2,
            produto: "Liquidificador",
            descricao: "Liquidificador potente com 5 velocidades e copo de vidro resistente, perfeito para preparar smoothies e sopas."
        },
        {
            id: 3,
            produto: "Ferro de Passar",
            descricao: "Ferro de passar a vapor com placa antiaderente, ideal para alisar todos os tipos de tecido de forma rápida e eficaz."
        },
        {
            id: 4,
            produto: "Micro-ondas",
            descricao: "Micro-ondas com funções automáticas de descongelamento e aquecimento, facilitando o preparo das suas refeições."
        },
        {
            id: 5,
            produto: "Batedeira",
            descricao: "Batedeira planetária com 6 velocidades, ideal para quem gosta de preparar bolos e massas de maneira prática e eficiente."
        }
    ]
    
    return <>
    <Menu />
    <Container>Lista {produtos.map(produto =>
        <div>
            <p>{produto.produto}</p>
            <p>{produto.descricao}</p>
        </div>
    )}</Container>
    <Footer />  
    </>
}