import React from 'react'
import styled from "styled-components"
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';

const Container=styled.div`
    flex:1;
    display: flex; 
    flex-direction:column;
    height: 100vh;
    width: 600px;
    background-color:white;




    
    `;
const Quote=styled.span`
    width: 400px;
    height: 60px;
    font-size: 20px;
    margin-left:1px;
    padding:20px;
    text-align: center;
    background-color: #7DCEA0 ;
    color:#fff;
    border-color:white;
    border-radius:8px;
    margin-top:150px;
    color:white;



`;

const Degister=styled.button`
    width: 120px;
    height: 50px;
    font-size: 15px;
    margin-left:170px;
    padding:20px;
    text-align: center;
    background-color:#F1948A;
    color:#fff;
    border-radius:5px;
    border-color:white;
    font-weight: bold;
    align-items:center;
    justify-content: center;


    

`;
const Stoic = () => {
    const [quote, setQuote] = useState("Dünya son derece öngörülemez olaylarla doludur.");
    const [change, setChange] = useState(false);


    const handleClick = async () => {
        try {
            const res = await axios.get("/stoic-quote")
            setQuote(res.data.data.quote)


        } catch (error) {
            console.log(error)

        }
    }


  return (
    <Container>
        <Quote>{quote}</Quote>
        <Degister onClick={handleClick}>Change</Degister>
    </Container>
  )
}

export default Stoic