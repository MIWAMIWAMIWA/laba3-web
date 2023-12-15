import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../icons/xd.png";
import {SuccessButton, SuccessContainer, SuccessImage, SuccessText, SuccessTitle} from "./SuccessPage.styled";
import {BackButton1} from "../Login/Login.styled";


const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

    return (
        <SuccessContainer>
            <SuccessImage src={logo} alt="" />
            <SuccessTitle>Success</SuccessTitle>
            <SuccessText>Your order was sent to processing!</SuccessText>
            <SuccessText>Check your email box for further information.</SuccessText>
            <BackButton1 onClick={handleBackToCatalog}>Go back to Catalog</BackButton1>
        </SuccessContainer>
    );
};

export default SuccessPage;