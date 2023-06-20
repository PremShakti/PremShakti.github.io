import React from 'react'
// import Home from './home'
import styled from 'styled-components'
import About from './about'
import Mytimeline from './Mytimeline'
import MySkils from './MySkils'
import Hero from './home'
import Contact from './contact'
import Footer from './Footer'
import Myprojects from './Myprojects'
import GitHub from './GitHub'

const Homemain = () => {
    return (
        <DIV>
             <Hero />
            <div className="bgimageOfsecondimage" id='projects'>
            
                <About />
                {/* <Mytimeline /> */}
                <MySkils />
                <h2 className='about'>My Projects</h2>
                <hr />
                <Myprojects/>
                <GitHub/>
            </div>
            <Contact/>
            <Footer/>

        </DIV>
    )
}

export default Homemain

const DIV = styled.div`
      .about{
  text-align: center;
  color: #000000;
  text-shadow: 1px 1px 0px white;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-top: 50px;
 
}
hr{
    color: green;
}
    .bgimageOfsecondimage{
    /* margin-top: 10px; */
    /* background-image: url("https://drive.google.com/uc?id=1KVxWxufjdtWKvWSq9-byhOEQoOG06sxJ"); */
    /* background-color: #cecece; */
    width: 80%;
    /* background-size: 100%; */
    /* background-repeat: no-repeat; */
    /* border: 1px solid; */
    margin: auto;
    
  }
  @media screen and (max-width:850px) {
    .bgimageOfsecondimage{
    /* margin-top: 10px; */
    /* background-image: url("https://drive.google.com/uc?id=1KVxWxufjdtWKvWSq9-byhOEQoOG06sxJ"); */
    /* background-color: #cecece; */
    width: 95%;
    /* background-size: 100%; */
    /* background-repeat: no-repeat; */
   
    margin: auto;
    position: relative;
    
  }
  hr{
    margin-bottom: 30px;
  }
  }
`