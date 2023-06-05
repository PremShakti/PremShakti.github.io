import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from "aos";
import 'aos/dist/aos.css'


const Mytimeline = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
    },[])
  return (
    <DIV>
      <h2 className="about"  id="projects">My Timeline</h2>
<hr />
<div className="aboutdiscription " data-aos="zoom-in">
<h2>Web Devlopment</h2>
<h3>masai school (Remote)</h3>
<p>While attending a military-style bootcamp to learn web development and data structures, I also acquired numerous soft skills.</p>
</div>

<div className="educationcollage">
<div className="aboutdiscription aboutdiscription2 aboutdiscription3" data-aos="fade-right">
<h3>Intermedite</h3>
<h3>Koyalchal Sanjay Gandhi Memorial College.</h3>

</div>
<div className="aboutdiscription aboutdiscription2 aboutdiscription3 " data-aos="fade-left">
<h3>Diploma in Electrical Engineering</h3>
<h3>Birsha Institute of Technology Ranchi Getlatu</h3>
</div>

</div>
    </DIV>
  )
}

export default Mytimeline

const DIV=styled.div`
    
    .about{
  text-align: center;
  color: #000000;
  text-shadow: 1px 1px 0px white;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-top: 50px;
 
}

.aboutdiscription{
  width: 40%;
  border-radius: 10px;
  padding: 25px;
  margin: auto;
  margin-top: 30px;
 
  color: black;
 
  /* background-color: #5aff7f; */
  background-color: #ffffff;
border: 1px solid green;
  line-height: 30px;
  
  font-family: "Gill Sans", sans-serif;
  
  
}

.aboutdiscription h2,h3,p{
  text-align: center;
}
hr{
  color: #5aff7f;

}


.educationcollage{
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;

}
@media screen and (max-width:850px) {
  .educationcollage{
 display: grid;
grid-template-columns: repeat(1,fr);

}
}

`