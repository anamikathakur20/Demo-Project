import React, { useState } from 'react';
import '../index.css';

function Signup(){

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    password: '',
    confirmpassword: '',
    address: '',
    stream: ''
  })
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const HandleSubmit =(e) => {
    e.preventDefault();
    console.log(values);
    if (values.password[0] !== values.confirmpassword[0])
      {
      setError("Passwords don't match");
    } else if (values.password[0].length < 4) {
      setError("Password must be at least 4 characters");
    } else {
      setError("");
    }
  };

 const ResetFun = () => {
  setValues({firstname: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    password: '',
    confirmpassword: '',
    address: '',
    stream: ''})
 }

return(
  <div className="container">
    <h1 className='headerclass'>B.Tech Admission Form 2025</h1>

    <form onSubmit={HandleSubmit}>

      <label htmlFor="firstname">First Name*</label>
      <input type='text' placeholder='Enter First Name' name='firstname'
      onChange={(e) => handleChanges(e)}  value={values.firstname}/>

      <label htmlFor="lastname">Last Name*</label>
      <input type='text' placeholder='Enter Last Name' name='lastname'
      onChange={(e) => handleChanges(e)} value={values.lastname}/>

      <label htmlFor="email">Email*</label>
      <input type='email' placeholder='Enter Email' name='email'
      onChange={(e) => handleChanges(e)} value={values.email}/>

      <label htmlFor="contact">Contact*</label>
      <input type='text' placeholder='Enter Mobile Number#' name='contact'
      onChange={(e) => handleChanges(e)}  value={values.contact}/>

      <label htmlFor="password">Password*</label>
      <input type='password' placeholder='Enter Your Password' name='password'
      onChange={(e) => handleChanges(e)}  value={values.password}/>

      <label htmlFor="confirmpassword">Confirm Password*</label>
      <input type='password' placeholder='Enter Your Confirm Password' name='confirmpassword'
      onChange={(e) => handleChanges(e)}  value={values.confirmpassword}/>
      
      {error && <p>{error}</p>}
      
      <label htmlFor="gender">Gender*</label>
      <input type='radio' name='gender'
      onChange={(e) => handleChanges(e)}/> Male
      <input type='radio' name='gender'
      onChange={(e) => handleChanges(e)}/> Female
      <input type='radio' name='gender'
      onChange={(e) => handleChanges(e)}/> Other

      <label htmlFor="subject">Write Your Subject*</label>
      <input type='text' placeholder='Enter Your Subjects Choice' name='subject'
      onChange={(e) => handleChanges(e)}  value={values.subject}/>

      <label htmlFor='stream'>Choose Your Stream</label>

      <select name='stream' id='stream' onChange={(e) => handleChanges(e)}>
        <option value='Select'>Select</option>
        <option value='CS'>CS</option>
        <option value='EEE'>EEE</option>
        <option value='ECE'>ECE</option>
        <option value='Mechanical'>Mechanical</option>       
      </select>

      <label htmlFor="address">Provide Address*</label>
      <input type='text' placeholder='Enter Your Current Address' name='address'
      onChange={(e) => handleChanges(e)}  value={values.address}/>

      <button type='button' onClick={ResetFun}>Reset</button>
      <button type='submit'>Submit</button>
    </form>

  </div>
);
}
export default Signup;