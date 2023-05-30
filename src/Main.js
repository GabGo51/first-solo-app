import styled from 'styled-components'
import Pod from './Pod'
import Intro from './Intro'
import TechStack from './TechStack'
import Links from './Links'
import { useEffect, useState, useRef } from 'react'

const Main = () =>{
 return (
    <Container>
        <Top>
            <Intro/>
            <Pod/>
            <Links/>
            <TechStack/>
        </Top>
        
        
    </Container>
 )
}


const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
margin-top: 100px;
`

const Top = styled.div`
position: absolute;
top: 200px;
width: 800px;
height: 500px;

`
export default Main