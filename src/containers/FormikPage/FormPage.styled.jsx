import styled from 'styled-components';
import {Button} from "antd";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const FormField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export const BackButton = styled.button`
  margin: 0 10px;
  background-color: orangered; 
  color: black;
  border: 1px solid #d4380d; 
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  &:hover {
    background-color: #d4380d; /* Ant Design hover color */
    border-color: #d4380d; /* Ant Design hover border color */
  }

  &:disabled {
    background-color: #f5f5f5; /* Ant Design disabled background color */
    color: #bfbfbf; /* Ant Design disabled text color */
    border-color: #d9d9d9; /* Ant Design disabled border color */
    cursor: not-allowed;
  }
`