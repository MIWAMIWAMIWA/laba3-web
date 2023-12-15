import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export const RegisterFormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
 
`;

export const RegisterTitle = styled.h2`
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



  span {
    color: #007bff;
    cursor: pointer;
  }
`;
