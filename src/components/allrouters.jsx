import { Route,Routes } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Contact from "./contact";

const Allrouter=()=>{

return(
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    </>
);
}

export default Allrouter;