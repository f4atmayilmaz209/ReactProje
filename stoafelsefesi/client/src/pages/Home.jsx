import React from 'react'
import Menu from "../components/Menu.jsx"
import Content from '../components/Content.jsx'
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx"

const Container=styled.div`
  display:flex;
  flex-direction:column;

`;
const Main=styled.div`
  display:flex;
  flex-direction:row

`;



const Home = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Main>
          <Menu></Menu>
          <Content></Content>
        </Main>

    </Container>
  )
}

export default Home