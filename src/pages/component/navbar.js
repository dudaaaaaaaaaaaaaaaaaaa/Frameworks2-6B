import {Container, Nav, Navbar} from 'react-bootstrap';
import styles from "@/styles/Navbar.module.css"
export default function Menu() {
  return ( 
    <Container>
      <Navbar expand="sm" className={`${styles.navGradiente} bg-success border-2 px-3 my-3 border border-success-subtle rounded rouded-3` } >
      
          <Navbar.Brand href="/">6B</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/noticias">Noticías</Nav.Link>
              <Nav.Link href="/promisse">Promessa</Nav.Link>
              <Nav.Link href="/pages">Pages</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
    
      </Navbar>   
    </Container>
  );
}

