import styled from 'styled-components'
import Pod from './Pod'
import Intro from './Intro'
import { useEffect, useState, useRef } from 'react'

const Main = () =>{
 return (
    <Container>
        <Top>
            <Intro/>
            <Pod/>
        </Top>
        
    </Container>
 )
}


const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;

`

const Top = styled.div`
position: absolute;
top: 200px;
width: 800px;

`
export default Main