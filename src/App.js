

import Navbar from './components/nav';
import Allrouter from './components/allrouters';
import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components';

function App() {
 
  return (
   <DIV>
  <Navbar /> 
  <Allrouter/>  
   </DIV>
  );
}

export default App;
const DIV=styled.div`
/* background-color:  #e9e9e9; */
background-color: white;

`