import React from 'react'
import styled from 'styled-components'

const Formm = () => {
  return (
    <DIV>   
           <form action="https://formspree.io/f/mknaagln" method="POST" className="Cform">
           <p>DROP A LINE</p>
                    <input type="text" placeholder="Your Name" name="username" id=""
                    required
                    autoComplete="off"
                    />
                    <input type="email" name="Email" placeholder="Email"
                    autoComplete="off"
                    required />
                    <textarea name="massage" id="" cols="30" rows="10" required autoComplete="off" placeholder='Message'></textarea>
                    <input type="submit" name="" value={"Send Message"} className='submit'/>
                </form>
    </DIV>
  )
}

export default Formm

const DIV=styled.div`
    
    .Cform{
    width: 90%;
    margin: auto;
    
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input{
    height: 30px;
    outline: none;
    border: none;
   background-color: transparent;
    font-size: x-small;
    border-bottom: 1px solid;
}
textarea{
    outline: none;
    border: none;
   background-color: transparent;
    font-size: x-small;
    color: black;
    border-bottom: 1px solid;
    height: 45px;
}
.submit{
    width: 140px;
    background-color: black;
    color: white;
    height: 40px;
    font-size: small;
}
`