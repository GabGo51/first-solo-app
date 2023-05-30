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
background: linear-gradient(109.6deg, rgb(32, 80, 64) 0.2%, rgb(0, 0, 0) 50.3%)
`
export default App;
