import { Text } from "@chakra-ui/react";
import styled from "styled-components";

const Contact=()=>{

    return(
        <DIV>
            <h2 className="aboutt"  id="contact">Contact us</h2>
          

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116814.76362491808!2d86.35184745934963!3d23.802187789774184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a30804ccfc6d%3A0xfa151e1b85f764e7!2sDhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1685559230133!5m2!1sen!2sin" width="100%" height="300" style={{border:0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


    <div id="contact-github"></div>
    <div id="contact-linkedin"></div>
    <div id="contact-phone"></div>
    <div id="contact-email"></div>

        </DIV>
    );
}

export default Contact;


const DIV=styled.div`
 

  .aboutt{
  text-align: center;
  color: #000000;
  text-shadow: 1px 1px 0px white;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-top: 50px;
 
}
  
`