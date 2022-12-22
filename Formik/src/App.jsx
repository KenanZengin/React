import logo from './logo.svg';
import './App.css';
import {  useFormik } from 'formik';
import Singup from './components/singup';
function App() {
  // const {handleChange,handleSubmit,values} = useFormik({
  //   initialValues: {
  //           email: '',
  //           password:'',
  //           passwordConfirm:''
           
  //   },
  //     onSubmit: values => {
  //       console.log(values);
  //     },
  // });
  return (
    <div className="App">
      <Singup />
  {/*//     <h1>Sign Up</h1>
  //     <form onSubmit={handleSubmit}>
     
     
  //    <label htmlFor="email" >Email</label>
  //    <input name="email" onChange={handleChange} type="email" value={values.email} />
  //    <br/><br/>

  //    <label>Password</label>
  //    <input name="password" onChange={handleChange} type="email" value={values.password} />
  //    <br/><br/>

  //    <label>Confirm password</label>
  //    <input name="passwordConfirm" onChange={handleChange} type="email" value={values.passwordConfirm} />
  //    <br/><br/>
     
  //    <button type="submit">Submit</button>
  //    <br /><br />
  //    {JSON.stringify(values)}
  //  </form>

















                
                {/* <label htmlFor="firstName">First Name</label>
                <input  name="firstName" onChange={handleChange} value={values.firstName} />
                <br/><br/>

                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" onChange={handleChange} value={values.lastName} />
                <br /><br/> */}
                {/* <span>Male</span>
                <input type="radio" name='gender' value="male" onChange={handleChange} checked={values.gender==="male"} />
                <span>Female</span>
                <input type="radio" name='gender' value="female" onChange={handleChange} checked={values.gender==="female"} />
                <br /><br />



                <div>
                <input type="checkbox" name='hobies' value="Play football" onChange={handleChange} />
                Football 
                </div>
                <div>
                <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange} />
                Cinema
                </div>
                <div>
                <input type="checkbox" name='hobies' value="Photo" onChange={handleChange}/>
                Photo
                </div>
                <br /><br />


                <select name="country" onChange={handleChange} value={values.country}>
                <option value="Turkey">Turkey</option>
                <option value="English">English</option>
                <option value="America">America</option>
                </select>
                <br /><br /> */}




                
    </div>
  );
}

export default App;
