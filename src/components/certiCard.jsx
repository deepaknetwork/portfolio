import { Col, Row } from 'react-bootstrap'
import './certiCard.css'

export default function CertiCard(props){
    function cli(x){
        window.location.href=x
    }
    return(
        <Col lg={4} xs={11}  className="card" onClick={()=>{cli(props.det.link)}}>
            <h3>{props.det.title}</h3>
            <h4>{props.det.platform}</h4>
        </Col>
        
    )
}