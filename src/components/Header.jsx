import { Link } from "react-router-dom";
import './Header.css';
import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
    return(
        <Container>
            <Row className="head " >
                <Col className="i justify-content-center" lg={2} xs={10}><Link class="hlink " aria-current="page" to="/portfolio/home">Home</Link></Col>
                <Col className="i justify-content-center" lg={2} xs={10}><Link class="hlink " aria-current="page" to="/portfolio/project">Projects</Link></Col>
                <Col className="i justify-content-center" lg={2} xs={10}>< Link class="hlink " aria-current="page" to="/portfolio/certificate" >Certificates</Link ></Col>
            </Row>
</Container>
 
    )
}