import Main from "./Main";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import  styled  from "styled-components";
import LightMode from "./LightMode";
import { useState } from "react";


function App() {

  const [light, setlight] = useState(false)
  
  return (
    <>
      <GlobalStyles/>
      <LightMode light = {light} setlight = {setlight}/>
      <Header/>
      <Main/>
      
      
    </>
    
  );
}




export default App;
