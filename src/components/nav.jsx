
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { useState } from "react";
import  {Link}  from "react-scroll"
// import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import Link from 'react-scroll'


const Navbar = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.myreducer.navbarFixd)
  const [togel, setTogel] = useState(false);
// console.log(myState)

  const handletogle = () => {
    if (togel == false) {
      setTogel(true)
    } else if (togel == true) {
      setTogel(false)
    }
  }

console.log(myState)
  return (
    <DIV myState={myState} >
       
      <header  id="nav-menu">
        <Flex h={"80px"} align={"center"} >

          <Flex w={"50%"} h={"100%"} align={"center"} pl={"5%"}>
            <Text id="user-detail-name">Prem</Text>
          </Flex>

          <Flex w={"50%"} h={"100%"} align={"center"}  >
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"} ><Link to="home" spy={true} smooth={true} duration={500} className="nav-link home" >Home</Link></Flex>
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><Link to="contact" spy={true} smooth={true} duration={500}className="nav-link contact" >Contact</Link></Flex>
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><Link to="about" spy={true} smooth={true} duration={500} className="nav-link about" >About</Link></Flex>
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><Link to="myskils" spy={true} smooth={true} duration={500} className=".nav-link.skills">My skils</Link></Flex>
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><Link to="section1" spy={true} smooth={true} duration={500} className="nav-link projects" >Download Resume</Link></Flex>
          </Flex>
        </Flex>


      </header>

      <header className="upDown" >
        <Flex h={"80px"} align={"center"} >

          <Flex w={"50%"} h={"100%"} align={"center"} pl={"5%"}>
            <Text>Prem</Text>
          </Flex>

          <Flex w={"50%"} h={"100%"} align={"center"}  >
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"} ><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></Flex>
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></Flex>
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><Link to="about" spy={true} smooth={true} duration={500}>About</Link></Flex>
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><Link to="myskils" spy={true} smooth={true} duration={500}>My skils</Link></Flex>
            <Flex h={"100%"} pl={"19px"} pr={"19px"} align={"center"} borderLeft={"1px solid black"}><Link to="myskils" spy={true} smooth={true} duration={500}>Download Resume</Link></Flex>
          </Flex>
        </Flex>


      </header>

      {/* nav for phone view */}

      <div className="navBarforPhone">
        <nav className="navPhoneLogo" id="navbar">Prem</nav>
      </div>

      <div className="navBarforPhone upDownForphone">
        <nav className="navPhoneLogo">Prem</nav>
      </div>




    </DIV>
  );
}


const DIV = styled.div`
    width: 100%;

    .navBarforPhone{
  display: none;
}
    header{
  position: absolute;
  background: transparent;
  width: 100%;
  z-index: 100000;
  border-bottom: 1px solid;
  }
  
.upDown{
  width: 100%;
  position: fixed;
  background-color:#5aff7f;
  transform: translateY(-100%);
  transition-property: transform opacity;
  transition-duration: 800ms;
  transform: ${(props)=>props.myState?"translateY(0%)":"translateY(-100%)"};
  opacity: ${(props)=>props.myState?"100%":"0%"} ;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}


.upDownForphone{
  display: none;
}
@media screen and (max-width:850px) {
  width: 100%;

  header{
      display: none;
    }
   
    
    .navBarforPhone{
      width: 100%;
      display: block;
      
      
    }

.upDownForphone{
 
  width: 100%;
  position: fixed;
  z-index: 30000;
  background-color:#5aff7f;
  transform: translateY(-100%);
  transition-property: transform opacity;
  transition-duration: 800ms;
  transform: ${(props)=>props.myState?"translateY(-100%)":"translateY(-200%)"};
  opacity: ${(props)=>props.myState?"100%":"0%"} ;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

 
    .navPhoneLogo{
      display: flex;
      height: 49px;
      background-color: #5aff7f;
      color: black;
      align-items: center;
      padding-left: 10px;
      font-size: 2rem;
      font-weight: bold;
    }
  


  }


`



export default Navbar;