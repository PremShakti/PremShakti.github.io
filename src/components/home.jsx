
import { Text,Image,Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos.css'


const Hero=()=>{
  

  const [text, setText] = useState('');
  const fullText = 'Hii, I am Prem focusing on creating awsome websites';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === fullText.length-1) {
        clearInterval(interval);
      } else {
        setText((prevText) => prevText + fullText[currentIndex]);
        currentIndex++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    AOS.init({duration:1000})
    },[])
    return(
        <DIV>
 <div className="firestImpresionWraper"  id="home">
  
<div className="firstImpresion" >
  <Text fontSize='50px' id="user-detail-name" >Full Staack Web Devloper</Text>
  <Text fontSize="25px" w={"80%"} id="user-detail-intro">{text}</Text>
</div>
 <img className="home-img"  src="https://drive.google.com/uc?id=1Jaq2cycUh8jqA4DeYH3BwVHDdTMQnyIG" alt="photo" />
 </div>
      
        </DIV>
    );
}

export default Hero;

const DIV=styled.div`
.home-img{
    position: absolute;
    right: 5%;
    bottom: 0px;
    width: 600px;
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
    
    .home-img{
      display: none;
    } 

    .firestImpresionWraper{
      height:320px;
       position:relative;
        background-color:#5aff7f;
    }
    .firstImpresion{
      
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