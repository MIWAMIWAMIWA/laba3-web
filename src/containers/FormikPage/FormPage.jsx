import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAllItemsFromCart } from '../redux/CartPageActions';
import ErrorValid from '../ErrorValid/ErrorValid';
import {
  CheckoutContainer,
  FormContainer,
  FormTitle,
  FormField, BackButton,
} from './FormPage.styled'
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    Mail: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().max(20, 'Max 20 characters').required('First Name is required'),
    lastName: Yup.string().max(30, 'Max 30 characters').required('Last Name is required'),
    email: Yup.string().required('Email is required').matches(/@gmail\...{1,}$/, 'Email must end with gmail.com'),
    phoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number')
        .required('Phone Number is required'),
    Mail: Yup.string()
        .matches(/^\d{6}$/, 'Invalid phone number')
        .required('Mail Address is required'),
  });

  const handleSubmit = (values, actions) => {
    console.log('Form submitted!', values);
    actions.setSubmitting(false);
    dispatch(removeAllItemsFromCart());
    navigate('/success');
  };

  return (
      <CheckoutContainer>
        <FormContainer>
          <FormTitle>Checkout</FormTitle>
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
                <Form>
                  <FormField>
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component={ErrorValid} />
                  </FormField>
                  <FormField>
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component={ErrorValid} />
                  </FormField>
                  <FormField>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component={ErrorValid} />
                  </FormField>
                  <FormField>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field type="tel" id="phoneNumber" name="phoneNumber" />
                    <ErrorMessage name="phoneNumber" component={ErrorValid} />
                  </FormField>
                  <FormField>
                    <label htmlFor="Mail">Mail address</label>
                    <Field type="text" id="Mail" name="Mail" />
                    <ErrorMessage name="Mail" component={ErrorValid} />
                  </FormField>
                  <div>
                    <PrimaryButton onClick={() => navigate('/catalog')}>
                      Back to Catalog
                    </PrimaryButton>
                    <BackButton  type="submit" disabled={isSubmitting}>
                      Continue
                    </BackButton>
                  </div>
                </Form>
            )}
          </Formik>
        </FormContainer>
      </CheckoutContainer>
  );
};

export default FormPage;
