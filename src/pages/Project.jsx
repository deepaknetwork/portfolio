import { useContext } from "react";
import data, { NavContext } from "../Data/data";
import SideBar from "../components/SideBar";
import ReactCard from "../components/reactCard";
import './project.css';
import rr from './RR.png';

export default function Project(){
    window.scrollTo(0, 0);
    var{navTab,changeNav}=useContext(NavContext)
    changeNav("project")
    var react_data=data
    return(
    
     
         <section className="row section2">
         {react_data.map((x)=>{return <ReactCard rd={x} key={x.id} />})}
         </section>
       
    )
}