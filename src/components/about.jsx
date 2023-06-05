import { Text } from "@chakra-ui/react";
import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {
useEffect(()=>{
AOS.init({duration:1000})
},[])
  return (
    <DIV>
      <div id="about" className="about section"></div>
      <h2 className="about">About Me</h2>
      <hr />
      <div className="aboutdiscription aboutdiscription1" data-aos="fade-up" >
        <p>A dedicated and skilled Full Stack Web Developer with a specialization in React, Redux, MongoDB, Express.js & Node.js, committed to staying current with new technologies and industry trends. Seeking a dynamic and challenging role in a product-driven company that values creativity, collaboration, and professional development.</p>
      </div>
    </DIV>
  );
}

export default About;

const DIV = styled.div`
  
  .about{
  text-align: center;
  color: #000000;
  text-shadow: 1px 1px 0px white;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-top: 50px;
 
}

.aboutdiscription{
 
  border-radius: 10px;
  padding: 25px;
  margin: auto;
  margin-top: 30px;
  color: #000000;
  /* background-color:  #5aff7f; */
  background-color: #ffffff;
border: 1px solid green;
  line-height: 30px;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  font-family: "Gill Sans", sans-serif
}

.aboutdiscription h2,h3,p{
  text-align: justify;
}
hr{
  color: #5aff7f;

}
.aboutdiscription1{
  width: 50%;
  margin-bottom: 30px;
}
@media screen and (max-width:850px) {
  .aboutdiscription1{
  width: 90%;
  margin-bottom: 30px;
}
}
`