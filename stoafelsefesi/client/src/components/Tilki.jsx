import React from 'react'
import styled from "styled-components"
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';

const Container = styled.div`

    height:100vh;
    border:1px;
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;

`;
const Resim = styled.img`
    width:300px;
    height:300px;
    border-radius:50%;
    margin-top:100px;
    margin-left:10px;
    margin-bottom:20px
    object-fit:cover;`;



const Degister = styled.button`
    width: 120px;
    height: 50px;
    font-size: 15px;
    margin-left:10px;
    padding:20px;
    text-align: center;
    background-color: #F1948A;
    color:#fff;
    border-radius:5px;
    border-color:white;
    font-weight: bold;
    align-items:center;
    justify-content: center;


    

`;
const Tilki = () => {
    const [photo, setPhoto] = useState("");
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const getPhoto = async () => {
            try {
                const res = await axios.get("https://randomfox.ca/floof/")
                console.log("ge")
                console.log(res.data.image)
                setPhoto(res.data)


            } catch (error) {
                console.log(error)

            }
        }
        getPhoto();


    }, [liked])

    return (
        <Container>
            <Resim src={ photo.image }></Resim>
            <Degister onClick={() => setLiked(!liked)}>Change</Degister>
        </Container>
    )
}

export default Tilki