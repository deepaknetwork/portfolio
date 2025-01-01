import { Link } from "react-router-dom";
import './Header.css';
import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
    return(
        <Container className="header">
            <Row className="head " >
                <Col className="i justify-content-center" lg={2} xs={10}><Link class="hlink " aria-current="page" to="/">About</Link></Col>
                <Col className="i justify-content-center" lg={2} xs={10}><Link class="hlink " aria-current="page" to="/project">Projects</Link></Col>
                <Col className="i justify-content-center" lg={2} xs={10}>< Link class="hlink " aria-current="page" to="/certificate" >Certificates</Link ></Col>
            </Row>
</Container>
 
    )
}