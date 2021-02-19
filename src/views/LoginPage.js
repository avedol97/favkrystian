import React from 'react';
import {Form,Formik,Field} from 'formik';
import styled from 'styled-components';
import {Link,Redirect} from 'react-router-dom'
import AuthTemplate from '../components/Templates/AuthTemplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import { routes } from '../routes';


const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;


const StyledLink = styled(Link)`
  display: block;
  color: black;
  margin: 20px 0 50px;
  text-transform: uppercase;
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.bold };

`;

const LoginPage = () => (
  <AuthTemplate>
  <Formik
  initialValues={{username:'',password:''}}
  onSubmit={() => console.log('kdfsdf')}>
    {({handleChange,handleBlur,values }) => {
      return (
        <>
          <Heading>Sign in</Heading>
          <StyledForm>
            <StyledInput
              name="username"
              type="text"
              placeholder="Login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <Button activecolor="notes" type="submit">sign in</Button>
          </StyledForm>
          <StyledLink to={routes.register}>I want my account!</StyledLink>
        </>
      );
    }}
  </Formik>
  </AuthTemplate>

);

export default LoginPage;
