import React from 'react'
import styled from "styled-components"
import Zaman from './Zaman'
import Weather from './Weather'

const Container=styled.div`
    background-color:purple;
    height:120px;

    `
const Navbar = () => {
  return (
    <Container>
        <Zaman></Zaman>

    </Container>
  )
}

export default Navbar