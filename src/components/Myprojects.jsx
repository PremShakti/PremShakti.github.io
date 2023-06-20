import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'
import styled from 'styled-components'

const Myprojects = () => {

const arr=[
    {
        img:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Project Name",
        githublink:"",
        netlifylink:"",
        key:1

    },
    {
        img:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Project Name",
        githublink:"",
        netlifylink:"",
        key:1

    },
    {
        img:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Project Name",
        githublink:"",
        netlifylink:"",
        key:1

    },
    {
        img:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Project Name",
        githublink:"",
        netlifylink:"",
        key:1

    },
    {
        img:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Project Name",
        githublink:"",
        netlifylink:"",
        key:1

    },
    {
        img:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Project Name",
        githublink:"",
        netlifylink:"",
        key:1

    },
]

  return (
    <DIV>
       
    {arr.map((e)=>(
     
<div className='project-card'  >
   <div className='cardOfproject'>
   <img src={e.img} alt="project photo" />


   <div className='detailbar'>
   <h3>{e.name}</h3>

   <div className='iconContainer'> 
      <a href={e.githublink}><AiFillGithub/></a> 
      <a href={e.netlifylink}><SiNetlify/></a> 
   </div>

   </div>

</div>
</div>
    ))}
 
      
    </DIV>
  )
}

export default Myprojects

const DIV=styled.div`

    width: 100%;
margin-top: 30px;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 20px;

.project-card{
    
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 245px;
    background-color:#5aff7f;
    overflow: hidden;
    position: relative;
}
.cardOfproject{
    width: 95%;
    
    border-radius: 10px;
    
    overflow: hidden;
    transition: transform scale;
    transition-duration: 300ms;
}
.project-card:hover img{
    transform: scale(1.2);
}

img{
    width: 100%;
    transition: transform scale;
    transition-duration: 300ms;
}
.detailbar{
    position: absolute;
   backdrop-filter: blur(8px);
    left: 0;
    bottom: 0;
    width: 100%;
}
h3{
    text-align: center;
    color: white;
}
.iconContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    font-size: 1.5rem;
    
}
a{
color: #030303;
transform-style: preserve-3d;
  transition: transform 0.5s;
}
a:hover{
    transform: rotateY(180deg);
}

@media screen and (max-width:850px) {
    margin: auto;
    width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
.project-card{
    
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color:#5aff7f;
    overflow: hidden;
    position: relative;
}
.iconContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    font-size: 1rem;
    
}
h3{
    font-size: 0.8rem;
}
}
`