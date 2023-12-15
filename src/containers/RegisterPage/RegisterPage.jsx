import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ErrorValid from '../ErrorValid/ErrorValid';
import { RegisterFormContainer, RegisterTitle, FormField } from './RegisterPage.styled';
import {BackButton1} from "../Login/Login.styled";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    retypePassword: '',
  };

  const handleRegister = (values) => {
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const newUser = { email: values.email, password: values.password };
    existingUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    navigate('/login');
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('name is required'),
    email: Yup.string().required('No email filled').matches(/@gmail\.com$/, 'Email must end with gmail.com'),
    password: Yup.string().required('Password is required').min(8, 'password must have length at least 8'),
    retypePassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must be identical')
        .required('Password must be retyped'),
  });



  return (
      <RegisterFormContainer>
        <RegisterTitle>Register</RegisterTitle>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
        >
          <Form>
            <FormField>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component={ErrorValid} />
            </FormField>
            <FormField>
              <Field type="text" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={ErrorValid} />
            </FormField>
            <FormField>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component={ErrorValid} />
            </FormField>
            <FormField>
              <Field type="password" name="retypePassword" placeholder="Retype Password" />
              <ErrorMessage  name="retypePassword" component={ErrorValid} />
            </FormField>
            <p>
              Already a member?{' '}
              <PrimaryButton onClick={() => navigate('/')}>Login</PrimaryButton>
            </p>
            <BackButton1 type="submit">Register</BackButton1>

          </Form>
        </Formik>
      </RegisterFormContainer>
  );
};

export default Register;

