import  styled  from "styled-components"


const Links = () =>{
return(
<>
  <Link href="https://www.linkedin.com/in/gabriel-gosselin-802bb5247/"> Lnk</Link>
  <Link href="https://github.com/GabGo51">Github</Link>
</>
)

}


const Link = styled.a`
cursor: pointer;
`


export default Links