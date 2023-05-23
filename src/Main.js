import styled from 'styled-components'
import Pod from './Pod'
import { useEffect, useState, useRef } from 'react'

const Main = () =>{
 return (
    <Container>
        <Pod/>
    </Container>
 )
}


const Container = styled.div`
height: 100vh;
background: linear-gradient(109.6deg, rgb(72, 200, 160) 11.2%, rgb(32, 40, 48) 91.3%);
display: flex;
align-items: center;
justify-content: center;
`
export default Main