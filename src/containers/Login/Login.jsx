import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ErrorValid from '../ErrorValid/ErrorValid';
import {
  LoginFormContainer,
  LoginTitle,
  FormField, CenteredText, BackButton1,
} from './Login.styled';
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = (values) => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = registeredUsers.find(user => user.email === values.email);
    if (user && values.password === user.password) {
      localStorage.setItem('loggedInUser', values.email);
      navigate('/');
    } else {
      alert('WRONG EMAIL OR PASSWORD');
    }
  };

  return (
      <LoginFormContainer>
        <LoginTitle>Login</LoginTitle>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
          <Form>
            <FormField>
              <Field type="text" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={ErrorValid} />
            </FormField>
            <FormField>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component={ErrorValid} />
            </FormField>
            <BackButton1 type="submit">Login</BackButton1>
          </Form>
        </Formik>
        <CenteredText >
          Not a member?{' '}
          <PrimaryButton onClick={() => navigate('/register')}>Register</PrimaryButton>
        </CenteredText>
      </LoginFormContainer>
  );
};

export default Login;
