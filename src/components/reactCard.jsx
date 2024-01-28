import { Col, Row } from 'react-bootstrap';
import './reactcard.css';
import { useState } from 'react';
export default function ReactCard(props){

    const [isSlideUp, setIsSlideUp] = useState(false);
    console.log("load")

    function redirect(){
        setIsSlideUp(true);
        setTimeout(()=>{
         window.open(props.rd.link, "_blank")
         setIsSlideUp(false)
        },800)
       
    }
    var a=props.rd.image
    const divStyle = {
        backgroundImage: `url(${"/images/"+props.rd.image+".jpg"})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        /* You can also senot more styles like backgroundRepeat, backgroundAttachment, etc. */
    };

    
return(
    <Row className={`rcard ${isSlideUp ? 'slide-up' : ''}`} onClick={redirect}>
    
        <Col lg={4} xs={11} style={divStyle} className='rimg'></Col>
        <Col lg={8} xs={11} className="rdis">
            <div className='catdiv'>
                 <span className='cat'>{props.rd.catagory}</span>
            </div> 
            <div className='catbody'>
                <span className='catt'>{props.rd.title}</span>
                <span>{props.rd.discription}</span>
            </div>  
        
        </Col>
    </Row>
)
}