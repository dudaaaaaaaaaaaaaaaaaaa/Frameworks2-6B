import Footer from "./component/footer";

import {Container, Row, Col} from 'react-bootstrap';
import Menu from "./component/navbar";


function Index() {

  return <>

    <Menu />

    <Container className="px-4">
      <Row>
        <Col className="bg-success-subtle ">1 of 2</Col>
        <Col className="bg-success-subtle">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-success-subtle">1 of 3</Col>
        <Col className="bg-success-subtle">2 of 3</Col>
        <Col className="bg-success-subtle">3 of 3</Col>
      </Row>
    </Container> <Footer /></>


}
export default Index;