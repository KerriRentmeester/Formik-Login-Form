import React from "react";
// import { Formik, Field, Form } from 'formik';
// import useFormik from formik library
import { useFormik} from 'formik'

function App() {
  // add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) =>{
      alert("Login Successful");
    },

    validate: values =>{
      let errors = {};

      if(!values.email) {
        errors.email = 'Field Required'; // requires email field to be filled
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email address";
      }

      if(!values.password) errors.password = 'Field Required';  // requires password field to be filled
      
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        
        <div>Email:</div>
        <input 
          id="emailField" 
          type="text" 
          name="email" 
          onChange={formik.handleChange} 
          value={formik.values.email} 
          placeholder="Enter email here..."
        />
        {formik.errors.email ? (
          <div id="emailError" style={{color:'red'}}>
            {formik.errors.email}
          </div>
        ) : null}        
        <br />

        <div>Password:</div>
        <input 
          id="pswField" 
          type="text" 
          name="password" 
          onChange={formik.handleChange} 
          value={formik.values.password} 
          placeholder="Enter password here..."
        />
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{color:'red'}}>
            {formik.errors.password}
          </div>
        ) : null}                
        <br />

        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>      
    </div>
  );
}

export default App;
