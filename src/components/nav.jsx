import "../App.css"
import { Box, Flex, Text } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { GiHamburgerMenu } from "react-icons/gi";
import { togleOn, togleoF } from "../action";


const Navbar = () => {
    const dispatch=useDispatch();
   const myState=useSelector((state)=>state.myreducer.navbarFixd)
   const togle=useSelector((store)=>store.myreducer.togalMenuebar)
console.log(togle)

const handletogle=()=>{
    if(togle===false){
        dispatch(togleOn())
    }else if(togle===true){
        dispatch(togleoF())
    }
}


    return (
        <>
        
            <header className={myState?"header":null}>
                <Flex  h={"80px"}  align={"center"} >

                    <Flex w={"50%"} h={"100%"} align={"center"} pl={"5%"}>
                        <Text>Prem</Text>
                    </Flex>

                    <Flex w={"50%"} h={"100%"} align={"center"}  >
                        <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"} ><NavLink style={{ textDecoration: "none" }}>Home</NavLink></Flex>
                        <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><NavLink style={{ textDecoration: "none" }}>Contact</NavLink></Flex>
                        <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><NavLink style={{ textDecoration: "none" }}>About</NavLink></Flex>
                        <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={ "1px solid black"}><NavLink style={{ textDecoration: "none" }}>Fire Me An Email</NavLink></Flex>
                        <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><NavLink  style={{ textDecoration: "none" ,color:"black" }}>Download Resume</NavLink></Flex>
                    </Flex>
                </Flex>


            </header>

            {/* nav for phone view */}

            <div className="navBarforPhone">
                <nav className="navPhoneLogo">Prem</nav>
                <nav className="navPhoneMenue">
                    <button onClick={handletogle} className="navPhoneBtn">MENUE <GiHamburgerMenu/> </button>
                </nav>

            </div>
            <div className="leftTogleMenue" style={{ transform: togle? "translateY(-100%)":"translateY(0%)"}}></div>



        </>
    );
}



export default Navbar;