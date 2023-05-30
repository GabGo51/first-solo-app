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
display: flex;
align-items: center;
position: relative;

`
export default Main