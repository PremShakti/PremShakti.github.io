import { Route,Routes } from "react-router-dom";
import About from "./about";
// import Home from "./home";
import Contact from "./contact";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { abslute, sticky } from "../action";
import MySkils from "./MySkils";
import Mytimeline from "./Mytimeline";
import Homemain from "./Homemain";
import Hero from "./home";


const Allrouter=()=>{

    const dispatch=useDispatch();


    const [width, setCondition] = useState("100%")
  
  
      useEffect(() => {
          window.addEventListener("scroll", () => {
              if (window.pageYOffset > 200) {
                dispatch(sticky())
              } else {
                dispatch(abslute())
              }
          })
      })

return(
    <>
    <Routes>
        <Route path="/" element={<Homemain/>}/>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/myskils" element={<MySkils/>}/>
        <Route path="/mytimeline" element={<Mytimeline/>}/>
    </Routes>
    
    </>
);
}

export default Allrouter;