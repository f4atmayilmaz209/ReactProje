import React from 'react'
import styled from "styled-components"
import Tilki from './Tilki';
import Stoic from './Stoic';
import Zaman from './Zaman';

const Container=styled.div`
  flex:4;
  background-color:white;
  height:100vh;
  display:flex;
`;

const Content = () => {
  return (
    <Container>
      <Tilki></Tilki>
      <Stoic></Stoic>


    </Container>
  )
}

export default Content