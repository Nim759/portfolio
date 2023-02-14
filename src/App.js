import react from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Project from "./pages/Projects/Project";


function App() {
  return (
 
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Project" element={<Project/>}/>
        
        
        
        </Routes></BrowserRouter>
      

  );
}

export default App;
