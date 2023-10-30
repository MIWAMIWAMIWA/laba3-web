import React from "react";
import { IconBase } from "./LinkedImg.styled";

const LinkedImg = ({ image,link}) => (
    <IconBase style={{height:"40px",width:"40px"}}>
    <a  style ={{height:"30px",width:"30px",margin:"auto"}} href={link}>
        <img style ={{height:"30px",width:"30px",margin:"auto"}}src= {image} />
    </a>
    </IconBase>
);

export default LinkedImg;