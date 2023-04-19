
import { Text,Image,Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { abslute,sticky } from "../action";
import '../App.css'

const Home=()=>{
  const dispatch=useDispatch();


  const [width, setCondition] = useState("100%")


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
              dispatch(sticky())
            } else {
              dispatch(abslute())
            }
        })
    })


    return(
        <>

 <div className="firestImpresionWraper" >

<div className="firstImpresion" >
  <Text fontSize='50px'>Full Staack Web Devloper</Text>
  <Text fontSize="25px" w={"80%"}>Hi, I am Prem focusing on creating emotion</Text>
</div>

 <img src="https://drive.google.com/uc?id=1Jaq2cycUh8jqA4DeYH3BwVHDdTMQnyIG" alt="photo" className="ProfileIMG" />

 </div>

<div className="bgimageOfsecondimage">
  

</div>
      
        </>
    );
}

export default Home;