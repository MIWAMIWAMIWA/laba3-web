import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const StyledFooter = styled.div`
    margin-top: 20px;
    padding: 0px 50px;
    border: 0px;
    border-top: 3px;
    border-bottom: 3px;
    border-style: solid;
    border-color: orangered;
    background-color: orangered;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    p { 
        color: black;
        font-weight: 200;
    }
    h1 {
        margin-top: 10px;
    }
    div {
        width: 400px;
    }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


export const StyledText = styled.p`
    color: #8E8E93;
    margin-top: 15px;
    text-align: center;
`;