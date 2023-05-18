import React, { useState } from 'react';
import {useLocation} from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useEffect } from 'react';

const Container=styled.div`
    color:#006666;
    background-color:gray;
    width:500px;
    height:500px;
    margin:10%;
    display:flex;
    flex-direction:column;
    font-size:15px;
    font-weight:bold;
    gap:10px;
    border-radius:5px;
    margin-top:20px;
    margin-left:450px;

`;
const IpBilgileri = () => {
    const location=useLocation()
    const id=location.pathname.split("/")[3]
    const [data,setData]=useState([])


        
    useEffect(() => {
        const Sorgula = async () => {
            try {

                const res =await axios.get(`https://app.ipworld.info/api/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8&ip=${id}`)
                setData(res.data)

            } catch (error) {
                console.log(error)
        
            }
    
        }
        Sorgula();


    }, [])
    



  return (
    <>
        
        <Container>
            <div style={{marginLeft:"180px",fontSize:"30px"}}>Ip Bilgileri</div>
            <span style={{marginLeft:"10px"}}>Ip:</span>
            <span style={{marginLeft:"10px"}}>{data.ip}</span>
            <span style={{marginLeft:"10px"}}>Country:</span>
            <span style={{marginLeft:"10px"}}>{data.country}</span>
            <span style={{marginLeft:"10px"}}>Timezone:</span>
            <span style={{marginLeft:"10px"}}>{data.timezone}</span>
            <span style={{marginLeft:"10px"}}>Latitude:</span>
            <span style={{marginLeft:"10px"}}>{data.latitude}</span>
            <span style={{marginLeft:"10px"}}>Longitude:</span>
            <span style={{marginLeft:"10px"}}>{data.longitude}</span>
            <span style={{marginLeft:"10px"}}>CountryGeoNameId:</span>
            <span style={{marginLeft:"10px"}}>{data.countryGeoNameId}</span>
            <span style={{marginLeft:"10px"}}>Gmt:</span>
            <span style={{marginLeft:"10px"}}>{data.gmt}</span>
            <span style={{marginLeft:"10px"}}>Org:</span>
            <span style={{marginLeft:"10px"}}>{data.org}</span>

        </Container>
    </>
   
  )
}

export default IpBilgileri