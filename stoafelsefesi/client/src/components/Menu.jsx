import React from 'react'
import styled from "styled-components"
import Tilki from './Tilki';
import { Link } from "react-router-dom";

const Container=styled.div`
  flex:1;
  height:100vh;
  display:flex;
  flex-direction:column;
  gap:30px;


`;

const Menu = () => {
  return (
    <Container>
      <Link to="/usom" style={{textDecoration:"none",fontWeight:"bold",color:"gray",fontSize:"25px"}}>Usom Verileri
      </Link>
      <Link to="/ip" style={{textDecoration:"none",fontWeight:"bold",color:"gray",fontSize:"25px"}}>Ip Adresi Oluştur
      </Link>
    </Container>
  )
}

export default Menu