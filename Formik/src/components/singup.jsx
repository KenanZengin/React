import React from 'react'
import {  useFormik } from 'formik';
import validationSchema from './validations';
function Singup() {
    const {handleChange,handleSubmit,handleBlur,values,errors,touched} = useFormik({
        initialValues: {
                email: '',
                password:'',
                passwordConfirm:''
               
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema//validations
      });
      
  return (
    <div>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}> 
        <label htmlFor="email" >Email</label>
        <input name="email" onChange={handleChange}  value={values.email} onBlur={handleBlur} />
         {errors.email && touched.email &&<div className='error'>{errors.email}</div>} {/* bu şekilde hataları kullanıcıya gösterebliriz */}
        <br/><br/>

        <label>Password</label>
        <input name="password" onChange={handleChange}  value={values.password} onBlur={handleBlur} />
        {errors.password&& touched.password && <div className='error'>{errors.password}</div>}
        <br/><br/>

        <label>Confirm password</label>
        <input name="passwordConfirm" onChange={handleChange}  value={values.passwordConfirm} onBlur={handleBlur} />
        {errors.passwordConfirm&& touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
        <br/><br/>
        
        <button type="submit">Submit</button>
        <br /><br />
        {JSON.stringify(values)}
   </form>
    </div>
  )
}

export default Singup