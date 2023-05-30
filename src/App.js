import Main from "./Main";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import  styled  from "styled-components";



function App() {
  return (
    <>
      <GlobalStyles/>
      <Box>
        <Header/>
        <Main/>
      </Box>
      
    </>
    
  );
}

const Box = styled.div`

`


export default App;
