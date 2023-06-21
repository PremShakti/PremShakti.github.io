import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from "aos";
import 'aos/dist/aos.css'

const MySkils = () => {
    
    useEffect(()=>{
        AOS.init({duration:1000})
        },[])

  return (
    <DIV id='myskils'>
        <img src=""alt="" className='skills-card-img '/>

      <h2 className="myskils">My Skills</h2>
      <hr />
       <div className='forMyskillContainer'  id="skills" >
<div className='skills-card'  data-aos="fade-right">
    <h3>Front-end Development</h3>
    <div className='forflexCard'>
    <ul>
        <li>HTML5</li>
        <li>JavaScript</li>
        <li>Redux</li>
        <li>Chakra UI</li>
      
    </ul>
    <ul>
        <li>CSS3</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Bootstrap</li>
    </ul>
    </div>
   
</div>
<div className='skills-card'data-aos="zoom-in" >
    <img src="" alt="" className='skills-card-img'/>
    <h3>Back-end Development</h3>
    <div className='forflexCard'>
    <ul >
        <li>MongoDB</li>
        <li>Node</li>
        <li>Git/GitHub</li>
    </ul>
    <ul>
        <li>Express</li>
        <li>Postman</li>
    </ul>
    </div>
   
</div>


       </div>
    </DIV>
  )
}

export default MySkils


const DIV=styled.div`
width: 100%;

    .myskils{
       
        text-align: center;
  color: #000000;
  text-shadow: 1px 1px 0px white;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-top: 50px;
    }
.forMyskillContainer{
   
display: grid;
grid-template-columns: repeat(2,1fr);
margin-top: 30px;
gap: 50px;

}
.skills-card{

/* background-color: white; */
/* background-color: #5aff7f; */
background-color: #ffffff;
border: 1px solid green;
border-radius: 15px;
}
.forflexCard{
    display: flex;
    justify-content: center;
    gap: 70px;
}
ul{
    text-decoration: none;
   list-style: none;
   line-height: 60px;
   font-weight: bold;
   
}

ul li{
    color: #616161;
    font-size: large;
}
h3{
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
    color: #616161
}
hr{
    color: #5aff7f;
    
}
@media screen and (max-width:850px) {
    .forMyskillContainer{
display: grid;
grid-template-columns: repeat(1,1fr);
margin-top: 30px;
gap: 50px;

}
}
`