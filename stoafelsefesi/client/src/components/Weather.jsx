import React from 'react'
import styled from "styled-components"
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';


const Container=styled.div`
    margin-right:2px;
    font-size:15;
    font-weight:bold;
    width:100px;
    height:100px;
    align-items:center;
    text-align:center;
    margin-top:20px;
    margin-left:15px;

`;

const Weather = () => {

    const [weather, setWeather] = useState("");
  

    useEffect(() => {
        const getWeather= async () => {
            try {
                const res = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=Ankara,tr&APPID=0ea511fcd0eb5bdd7e9ca9b577fe9556")
                setWeather(res.data.main.temp)


            } catch (error) {
                console.log(error)

            }
        }
        getWeather();


    }, [weather])
  return (
    <Container>Ankara, {Math.ceil(weather-273.15)}C°</Container>
  )
}

export default Weather