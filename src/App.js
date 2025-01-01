import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/Project";
import '../src/pages/home.css';
import './app.css';
import Certificate from "./pages/certificate";
import SideBar from "./components/SideBar";
import { NavContext } from "./Data/data";
import { useEffect, useState } from "react";

function App() {
  
  var[navTab,setNavTab]=useState()
  const [fontLoaded,setFontLoaded]=useState(false)
 
  function changeNav(x){
    setNavTab(x)
  }
  return (
    <Router>
    <NavContext.Provider value={{navTab,changeNav}} >
    <SideBar />
    <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/project" element={<Project />} />
           <Route path="/certificate" element={<Certificate />} />
    </Routes>
    </NavContext.Provider>
    </Router >
  );
}

export default App;
