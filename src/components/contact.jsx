import { Text } from "@chakra-ui/react";
import styled from "styled-components";

const Contact=()=>{

    return(
        <DIV>
            <h2 className="about"  id="contact">Contact us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.5995224025805!2d86.69928021035417!3d23.785398041252346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6c3a9b21fefe5%3A0xfc3bdbef425d26a9!2sKali%20Mandir%2C%20Nirsa%2C%20Jharkhand%20828205!5e0!3m2!1sen!2sin!4v1684779069149!5m2!1sen!2sin" width="100%" height="300" style={{border:0 }}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


          
            <div className="contact-form">
                <form action="https://formspree.io/f/mknaagln" method="POST" className="Cform">
                    <input type="text" placeholder="User Name" name="username" id=""
                    required
                    autoComplete="off"
                    />
                    <input type="email" name="Email" placeholder="Email"
                    autoComplete="off"
                    required />
                    <textarea name="massage" id="" cols="30" rows="10" required autoComplete="off"></textarea>
                    <input type="submit" name="" value={"SEND"}/>
                </form>
            </div>
          

        </DIV>
    );
}

export default Contact;

const DIV=styled.div`
  .about{
  text-align: center;
  color: #000000;
  text-shadow: 1px 1px 0px white;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-top: 50px;
 
}
  
.contact-form{
    width: 100%;
    background-color: #5aff7f;
    padding: 20px;
}
.Cform{
    width: 50%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input{
    height: 40px;
    outline: none;
    border: none;
    padding: 10px;
    font-size: large;
}
textarea{
    outline: none;
    border: none;
    padding: 10px;
    font-size: larger;
}
`