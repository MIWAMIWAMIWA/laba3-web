import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 15px;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    width: 100%;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  span {
    color: #007bff;
    cursor: pointer;
  }
`
export const CenteredText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
`;

export const BackButton1 = styled.button`
  width: 400px;
  height: auto; /* Adjust as needed */
  font-size: 16px; /* Adjust as needed */
  margin-top: 20px;
  margin-bottom:67px;
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