import React from "react";
import { StyledLinkedImg, StyledLink, StyledImage } from "./LinkedImg.styled";

const LinkedImg = ({ image,link}) => (

        <StyledLinkedImg>
            <StyledLink href={link}>
                <StyledImage src={image} />
            </StyledLink>
        </StyledLinkedImg>
);

export default LinkedImg;