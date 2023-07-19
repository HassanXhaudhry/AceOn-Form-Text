import React, { Fragment } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';

export const Signup = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
  })

  const handleApi=()=>{
    axios.post(`https://dummyjson.com/docs/users#add`,{
      email: Yup.string,
      password: Yup.string
    }).then(result=>{
      alert('API call successfull')
      console.log(result)
    })
    .catch(error=>{
      alert('Can be anywhere noticable')
      console.log(error)
    })
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <Fragment>
        <div style={{position:"absolute", marginLeft:"150px", color:"white"}}>
        <h1 style={{textAlign:"center", marginBottom:'20px', marginTop:"120px"}}>Sign Up</h1>
        <div className='container d-flex justify-content-center align-items-center'>
          <Form class="form-group col-lg-14">
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-light mt-3" type="submit" onClick={handleApi}>Register</button>&nbsp;&nbsp;
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
        </div>
        </Fragment> 
      )}
    </Formik>
  )
}