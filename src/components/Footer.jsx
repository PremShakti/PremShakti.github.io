import React from 'react'
import Formm from './Form'
import styled from 'styled-components'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Btn from './Btn'

const Footer = () => {
    return (
        <DIV>
            <div className='footerheadLine'>
                <h2>I’m a designer, based in San Francisco. Currently a freelancer. You can see my hobbies on @Jack-Co and some photos on me too.</h2>
            </div>

            <div className='gridoffooter'>
                <Formm />
                <div className='addresBarMain'>
                    <div className='addresBar'>

                   
                <p >CONTACT ME</p>
                <p id="contact-phone" className='address'>4657 Franklin Avenue, ARCH CAPE 
                   +361-883-3218 
                    hello@jac-co.com</p>
                    {/* <button className='downloadresumaBTN'>DOWNLOAD RESUME</button> */}
                    <Btn name={"Download Resume"}/>
                    <div className='socialmeadiaIcon'>
                       <div ><AiFillLinkedin/></div>
                       <div><AiFillGithub/></div>
                       <div><AiFillLinkedin/></div>

                         </div>
                    </div>
                    
                </div>

            </div>
        </DIV>
    )
}

export default Footer

const DIV = styled.div`
width: 100%;
padding-top: 60px;
    background-color: #5aff7f;
    .gridoffooter{
        width: 70%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        border-top: 1px solid;
        padding-top: 30px;
      padding-bottom: 30px;

    }
    .footerheadLine{
        width: 40%;
        margin: auto;
        margin-bottom: 40px;
    
    }
    .footerheadLine h2{
        line-height: 1.9rem;
        font-family: "Shippori Mincho",serif;
        font-weight: 400;
        text-align: center;
    }
    .address{
        font-size: smaller;
    }
    .addresBar{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 20px;
       
        justify-content: center;

    }
    .addresBarMain{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .socialmeadiaIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 15px;

}


.socialmeadiaIcon div{
height: 50px;
width: 50px;

display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
border-radius: 50%;
background-color: green;
color: white;
transform-style: preserve-3d;
  transition: transform 0.5s;
}
.socialmeadiaIcon div:hover {
    transform: rotateY(180deg);
}

    @media screen and (max-width:850px) {
        .gridoffooter{
            width: 98%;
            display: grid;
        grid-template-columns: repeat(1,1fr);
        gap: 50px;
        }
        .footerheadLine{
        width: 90%;
        margin: auto;
        margin-bottom: 40px;
    
    }
    .addresBarMain{
        
        display: flex;
       justify-content: flex-start;
    }

.addresBar{
   
    width: 70%;
    margin-left: 5%;
}
.socialmeadiaIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 15px;

}
.socialmeadiaIcon div{
height: 50px;
width: 50px;

display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
border-radius: 50%;
background-color: green;
color: white;
}

    }

`

