import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/Project";
import Header from "./components/Header";
import '../src/pages/home.css';
import './app.css';
import Certificate from "./pages/certificate";

function App() {
  return (
    <BrowserRouter className="bb">
    <Header />
    <Routes>

           <Route path="/portfolio" element={<Home />} />
           <Route path="/portfolio/home" element={<Home />} />
           <Route path="/portfolio/project" element={<Project />} />
           <Route path="/portfolio/certificate" element={<Certificate />} />
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
