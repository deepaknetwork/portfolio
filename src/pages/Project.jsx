import data from "../Data/data";
import ReactCard from "../components/reactCard";
import './project.css';

export default function Project(){
    var react_data=data.reverse()
    return(
         <section className="section">
         {react_data.map((x)=>{return <ReactCard rd={x} key={x.id} />})}
         </section>
    )
}