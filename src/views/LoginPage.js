import React from 'react';
import {Form,Formik,Field} from 'formik';

const LoginPage = () => (
  <div>
  <Formik
  initialValues={{username:'',password:''}}
  onSubmit={() => console.log('krystian')}
  >
    {()=> (
      <>
      <Field name="username" type="email" />
      <Field name="password" type="password"/>
      <button type="submit">sign in</button>
      </>
    )}
  </Formik>
  </div>

);

export default LoginPage;
