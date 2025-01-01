import { Col, Row } from 'react-bootstrap';
import './reactcard.css';
import { useState } from 'react';
// import rr from './RR.png';
export default function ReactCard(props){

    const [isSlideUp, setIsSlideUp] = useState(false);
    console.log("load")

    const [isHovered, setIsHovered] = useState(false);

    // Handlers for mouse events
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    function redirect(){
        setIsSlideUp(true);
        setTimeout(()=>{
         window.open(props.rd.link, "_blank")
         setIsSlideUp(false)
        },800)
       
    }
    var a=props.rd.image
    
return(
    <div className='col-11 col-lg-3 project_card'>
        <span className='project_title'>{props.rd.title}</span>
        {/* <img src={`images/${props.rd.image}.png`} className='col-12 col-lg-12 project_img'/> */}
        <div className='col-12 col-lg-12 project_line'></div>
        <span className='project_catagory'>{props.rd.catagory}</span>
        <span className='project_discription'>{props.rd.discription}</span>
        <a href={props.rd.link} class="project_link" target="_blank" >{props.rd.btn}</a>
    </div>
)
}