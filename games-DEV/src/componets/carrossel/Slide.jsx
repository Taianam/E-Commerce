import React, { useState } from 'react'
import {Carousel} from '3d-react-carousal';
import './slide.css'

let slides = [
    <img  src="../../assets/playStation2.JPG" alt="1" />,
    <img  src="../../assets/Xbox.JPG" alt="2" />  ,
    <img  src="../../assets/ratchet.JPG" alt="3" />  ,
    <img  src="../../assets/zelda.JPG" alt="4" />  ,
    <img  src="../../assets/nintendogamesdev.jpg" alt="5" />   ];

function Slide() {
    return (
    <Carousel slides={slides} autoplay={true} interval={4000}/>
    )
}

export default Slide;