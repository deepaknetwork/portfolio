import { Link } from 'react-router-dom';
import './sidebar.css';
import { useContext } from 'react';
import { NavContext } from '../Data/data';
export default function SideBar(){

    var{navTab,changeNav}=useContext(NavContext)

    return (
        <div className="mbl_nav">
            <Link to="/" className={`mbl_nav_item ${navTab=="home"?"selected":""}`} >About</Link>
            <Link to="/project" className={`mbl_nav_item ${navTab=="project"?"selected":""}`}>Works</Link>
            <Link to="/certificate" className={`mbl_nav_item ${navTab=="certificate"?"selected":""}`}>Earned</Link>
        </div>
    )
}