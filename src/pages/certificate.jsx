import { Row } from 'react-bootstrap';
import { NavContext, cerData } from '../Data/data';
import Header from '../components/Header';
import CertiCard from '../components/certiCard';
import './certificate.css';
import SideBar from '../components/SideBar';
import { useContext } from 'react';

export default function Certificate(){
    var{navTab,changeNav}=useContext(NavContext)
    changeNav("certificate")
    window.scrollTo(0, 0);
    const data=cerData
    return(
        <div className='row certi'>
              {cerData.map(x=>{
                return <CertiCard det={x}/>
            })}
        </div>
    )
    
}