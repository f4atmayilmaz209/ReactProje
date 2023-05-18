import React from 'react'
import styled from "styled-components"
import { useState } from 'react';
import Weather from './Weather';


const Container = styled.div`
    background-color:white;
    display:flex;
    justify-content:end;
    color:gray;
    
   
`;
const Saat = styled.h1`
    margin-right:0;
    padding-right:0;
    color:gray;
`;




const Zaman = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time)
  }
  setInterval(updateTime, 1000)
  return (
    <Container>
      <Saat>{currentTime}</Saat>
      <Weather></Weather>
    </Container>
  )
}

export default Zaman