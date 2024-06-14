import { Row } from 'react-bootstrap';
import { cerData } from '../Data/data';
import Header from '../components/Header';
import CertiCard from '../components/certiCard';
import './certificate.css';

export default function Certificate(){

    const data=cerData
    return(
        <div className='certi'>
              <Row className='rrcard'>
              {cerData.map(x=>{
                return <CertiCard det={x}/>
            })}
           
            </Row>
        </div>
    )
    
}