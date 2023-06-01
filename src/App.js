import Main from "./Main";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import  styled  from "styled-components";
import LightMode from "./LightMode";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext} from "./Context";


function App() {

  const {light} = useContext(ThemeContext)

  return (
    <>
      <GlobalStyles light = {light}/>
      <Header/>
      <Main/>
      <LightMode/>
      
    </>
    
  );
}




export default App;
