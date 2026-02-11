import { Col, Row } from 'react-bootstrap'
import './certiCard.css'

export default function CertiCard(props){
    return(
        <div className="col-11 col-lg-3 certi_card">
            
            <span className='certi_platform'>{props.det.platform}</span>
            <span className='certi_title'>{props.det.title}</span>
            <a href={props.det.link} className='certi_link' target='_blank'>View certificate</a>
        </div>
        
    )
}