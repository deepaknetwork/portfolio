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
        <div className='project_title_div'>
        <span className='project_title'>{props.rd.title}</span>
                <div>
                    <div className='project_sta_div'>
                    {props.rd.btn=="Click to try!"?<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-record-circle-fill" style={{color:"green"}} viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-record-circle" style={{color:"red"}} viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
</svg>}
                    <span className='project_sta'>{props.rd.btn=="Click to try!"?"Product":"Code"}</span>
                    </div>
                    
                      
                </div>
        </div>
        {/* <img src={`images/${props.rd.image}.png`} className='col-12 col-lg-12 project_img'/> */}
        <div className='col-12 col-lg-12 project_line'></div>
        <span className='project_catagory'>{props.rd.catagory}</span>
        <span className='project_discription'>{props.rd.discription}</span>
        <a href={props.rd.link} class="project_link" target="_blank" >{props.rd.btn}</a>
    </div>
)
}