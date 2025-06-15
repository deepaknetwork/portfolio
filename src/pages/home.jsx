import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import './home.css';
import { NavContext, cont } from "../Data/data";
import SideBar from "../components/SideBar";
import { useContext, useEffect } from "react";
import Plus from "../style_components/plus";
import LineBar from "../style_components/lineBar";
import QuarterCircle from "../style_components/quaterCircle";
import mine from './mine.png';

export default function Home(){

    var{navTab,changeNav}=useContext(NavContext)
        changeNav("home")
    var conts=cont
    function Contact(p){
        const divStyle = {
            backgroundImage: `url('images/${p.x.image}.png')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
    
        };
        function redi(){
            window.open(p.x.link, "_blank")
        }
        return(
            <Col lg={1} xs={6} style={divStyle} onClick={redi} className="c">
                
            </Col>
        )
    }

    function resume(){
        window.open('https://drive.google.com/file/d/1IsFpCcvxQIA4AgTzRPj7gT9vh9ZMdDqp/view?usp=drive_link',"_blank")
    }
    function fix(){
        if(document.getElementById("hk1").classList.contains("hkD")){document.getElementById("hk1").classList.remove("hkD")}
        if(document.getElementById("hk2").classList.contains("hkD")){document.getElementById("hk2").classList.remove("hkD")}
        if(document.getElementById("hd").classList.contains("hdD")){document.getElementById("hd").classList.remove("hdD")}
        if(document.getElementById("k").classList.contains("kD")){document.getElementById("k").classList.remove("kD")}
    }
    setTimeout(() => {
        if(document.getElementById("deepak")){
            document.getElementById("deepak").classList.remove("hide")
        }
        if(document.getElementById("k")){
            document.getElementById("k").classList.add("kD")
        }
        
    }, 1100);
    const star = Array.from({ length: 7 }); 
    return(
       <section className="home" >
        <Row className="s1">
            <Col lg={5} xs={11} className="b1">
                <span className="hi">Hi! Im </span>
                <div  className="deepak" onClick={fix}>
                    <span id="deepak"  className="deepak_1 hide"> 
                        <h1 id="hk1" class="hk hkD">D</h1>
                    <h1 class="h h">e</h1>
                    <h1 id="hk2" class="hk hkD">e</h1>
                    <h1 id="hd" class="hd hdD">p</h1>
                    <h1 class="h">a</h1>
                    </span> 
                   
                    <h1 id="k" class="k">k</h1>
                </div>
                <span className="tagline">Building the Future in Lines of Code</span>
                <span className="dis">I am a passionate and dedicated web developer with strong skills in Spring Boot, MongoDB, and Docker. I specialize in building dynamic and scalable web applications, utilizing modern technologies to create efficient, containerized solutions and seamless user experiences</span>
                <button onClick={resume} className="btn">Check resume</button>
            </Col>
            <Col lg={5} xs={12} className="b2">
                <img src={mine} className="img" alt="" />
                <LineBar className="linebar" /> 
                <div className="clr-div">
                    <div className="clr-div-in" >
                       <div className="white-cir"><QuarterCircle data={{size:60,border:3,color:"white"}} /></div>
                    </div>
                    <div className="white-star">
                           <div className="white-star1">
                                    {star.map((_, index) => (
                                    <Plus data={{size:11.5,color:"white"}}/>
                                ))}
                           </div>
                           <div className="white-star1">
                                    {star.map((_, index) => (
                                    <Plus data={{size:11.5,color:"white"}}/>
                                ))}
                           </div>
                    </div>
                </div>
                <div className="blu-div"></div>
                <div className="blu-star">
                           <div className="blu-star1">
                                    {star.map((_, index) => (
                                    <Plus data={{size:13,color:"blue"}}/>
                                ))}
                           </div>
                           <div className="blu-star1">
                                    {star.map((_, index) => (
                                    <Plus data={{size:13,color:"blue"}}/>
                                ))}
                           </div>
                    </div>
                    <div className="orange-cir"><QuarterCircle data={{size:60,border:3,color:"orange"}} /></div>
            </Col>
        </Row>
        <Row className="s2">
            {conts.map((i)=>{ return <Contact x={i}/>})}
        </Row>
        {/* <Plus data={{size:14,color:"blue"}}/> */}
        {/* <LineBar /> */}
       {/* <QuarterCircle data={{size:55,border:3,color:"blue"}}/> */}
       </section>
    )
}