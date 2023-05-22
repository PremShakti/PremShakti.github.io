
import { Text,Image,Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos.css'


const Hero=()=>{
  const [width, setCondition] = useState("100%")

  useEffect(()=>{
    AOS.init({duration:1000})
    },[])
    return(
        <DIV>

 <div className="firestImpresionWraper"  id="home">
<div className="firstImpresion" >
  <Text fontSize='50px'>Full Staack Web Devloper</Text>
  <Text fontSize="25px" w={"80%"}>Hi, I am Prem focusing on creating awsome websites</Text>
</div>
 <img src="https://drive.google.com/uc?id=1Jaq2cycUh8jqA4DeYH3BwVHDdTMQnyIG" alt="photo" className="ProfileIMG"  data-aos="zoom-in"  />
 </div>
      
        </DIV>
    );
}

export default Hero;

const DIV=styled.div`
.ProfileIMG{
    position: absolute;
    right: 5%;
    bottom: 0px;
    width: 500px;
  }
 
.firstImpresion{
  /* border:1px dotted red; */
   width:28%;
    padding:10;
     position:absolute;
     left:20%;
     bottom:30%;
}
.firestImpresionWraper{
  height:550px;
   position:relative;
    background-color:#5aff7f;
}


  @media screen and (max-width:855px) {
    
    .ProfileIMG{
      display: none;
    } 

    .firestImpresionWraper{
      height:320px;
       position:relative;
        background-color:#5aff7f;
    }
    .firstImpresion{
      border:1px dotted red;
       width:85%;
        padding:10px;
         position:absolute;
         left:5%;
         bottom:20%;
    }
    
    .bgimageOfsecondimage{
      margin-top: 5px;
      background-image: url("https://images.pexels.com/photos/1157802/pexels-photo-1157802.jpeg?auto=compress&cs=tinysrgb&w=600");
      width: 100%;
      height: 1550px;
      background-size: 100%;
      background-repeat: no-repeat;
      
    }
  



  } 

`