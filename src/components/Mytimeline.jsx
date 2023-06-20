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
      <h2  className="about"  id="projects">My Timeline</h2>
       <hr />



<div className="masai " data-aos="zoom-in">
<p className='bold'>Full Stack Web Devlopment</p>
<p className='bold2'>masai school (Remote)</p>
<p className='description'>While attending a military-style bootcamp to learn web development and data structures, I also acquired numerous soft skills.</p>
</div>

<div className="educationcollage">
<div className="left" data-aos="zoom-in">
<p className='bold'>Intermedite</p>
<p  className='bold2'>Koyalchal Sanjay Gandhi Memorial College.</p>
<p className='description'>I have completed my 12th, intermedite from Koyalchal Sanjay Gandhi Memorial College</p>
</div>


<div className="right" data-aos="zoom-in">
<p className='bold'>Diploma in Electrical Engineering</p>
<p  className='bold2'>Birsha Institute of Technology Ranchi Getlatu</p>
<p className='description'>I have completed 3 years full time diploma in electrical engineering from Birsha Institute of Technology Ranchi Getlatu</p>
</div>

</div>
    </DIV>
  )
}

export default Mytimeline

const DIV=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
hr{
    color: #5aff7f;
    
}
.educationcollage{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20%;
  margin-top: 20px;
}
.masai{
  border: 1px solid;
  width: 40%;
  border-radius: 10px;
 padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
}
.left,.right{
  border: 1px solid;
  padding: 5px;
 border-radius: 10px;
 display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;
 
}
.bold{
  font-weight: bolder;
  margin: 10px;
}
.bold2{
  font-weight: bold;
  margin: 10px;
}
.description{
  text-align: center;
}

@media screen and (max-width:850px) {
  .educationcollage{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 30px;
  margin-top: 20px;
}

.masai{
  border: 1px solid;
  width: 96%;
  margin-top: 10px;
  margin-bottom: 7px;
  border-radius: 10px;
 padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
}
}


`