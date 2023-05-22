import React from 'react'
// import Home from './home'
import styled from 'styled-components'
import About from './about'
import Mytimeline from './Mytimeline'
import MySkils from './MySkils'
import Hero from './home'
import Contact from './contact'

const Homemain = () => {
    return (
        <DIV>
             <Hero />
            <div className="bgimageOfsecondimage">
                <About />
                <Mytimeline />
                <MySkils />
            </div>
            <Contact/>

        </DIV>
    )
}

export default Homemain

const DIV = styled.div`
    
    .bgimageOfsecondimage{
    /* margin-top: 10px; */
    /* background-image: url("https://drive.google.com/uc?id=1KVxWxufjdtWKvWSq9-byhOEQoOG06sxJ"); */
    /* background-color: #cecece; */
    width: 80%;
    background-size: 100%;
    background-repeat: no-repeat;
    /* border: 1px solid; */
    margin: auto;
    
  }
`