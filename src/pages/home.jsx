import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import './home.css';
import { cont } from "../Data/data";
export default function Home(){
    var conts=cont
    function Contact(p){
        const divStyle = {
            backgroundImage: `url(${"/images/"+p.x.image+".png"})`,  
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            /* You can also senot more styles like backgroundRepeat, backgroundAttachment, etc. */
        };
        function redi(){
            window.open(p.x.link, "_blank")
        }
        return(
            <Col lg={1} xs={6} style={divStyle} onClick={redi} className="c"></Col>
        )
    }




    //uuuuuuuuuuuuuuuuuuuuuuuuuuu
    return(
       <section className="home" >
        
        <Row className="s1">
            <Col lg={5} xs={11} className="b1">
                <span className="hi">Hi !</span>
                <span className="deepak"> Im, Deepak</span>
                <span className="tagline">Building the Future in Lines of Code</span>
                <button className="btn">Check resume</button>
            </Col>
            <Col lg={5} xs={11} className="b2"></Col>
        </Row>
        <Row className="s2">
            {conts.map((i)=>{ return <Contact x={i}/>})}
        </Row>
       </section>
    )
}