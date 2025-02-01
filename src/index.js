import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){

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

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const HandleSubmit =(e) => {
    e.preventDefault()
    console.log(values)
  }
 const ResetFun = () => {
  setValues({firstname: '', lastname: '', email: '', contact: '', password: '',confirmpassword: '',
    address: '', stream: ''})
 }

return(
  <div className="container">
    <h1>B.Tech Admission Form 2025</h1>

    <form onSubmit={HandleSubmit}>

      <label htmlFor="firstname">First Name*</label>
      <input type='text' placeholder='Enter First Name' name='firstname'
      onChange={(e) => handleChanges(e)} required value={values.firstname}/>

      <label htmlFor="lastname">Last Name*</label>
      <input type='text' placeholder='Enter Last Name' name='lastname'
      onChange={(e) => handleChanges(e)}required value={values.lastname}/>

      <label htmlFor="email">Email*</label>
      <input type='email' placeholder='Enter Email' name='email'
      onChange={(e) => handleChanges(e)}required value={values.email}/>

      <label htmlFor="contact">Contact*</label>
      <input type='text' placeholder='Enter Mobile Number#' name='contact'
      onChange={(e) => handleChanges(e)} required value={values.contact}/>

      <label htmlFor="password">Password*</label>
      <input type='password' placeholder='Enter Your Password' name='password'
      onChange={(e) => handleChanges(e)} required value={values.password}/>

      <label htmlFor="confirmpassword">Confirm Password*</label>
      <input type='password' placeholder='Enter Your Confirm Password' name='confirmpassword'
      onChange={(e) => handleChanges(e)} required value={values.confirmpassword}/>

      <label htmlFor="gender">Gender*</label>
      <input type='radio' name='gender'
      onChange={(e) => handleChanges(e)}/> Male
      <input type='radio' name='gender'
      onChange={(e) => handleChanges(e)}/> Female
      <input type='radio' name='gender'
      onChange={(e) => handleChanges(e)}/> Other

      <label htmlFor="subject">Write Your Subject*</label>
      <input type='text' placeholder='Enter Your Subjects Choice' name='subject'
      onChange={(e) => handleChanges(e)} required value={values.subject}/>

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
      onChange={(e) => handleChanges(e)} required value={values.address}/>

      <button type='button' onClick={ResetFun}>Reset</button>
      <button type='submit'>Submit</button>
    </form>

  </div>
);
}
const rootelement = document.getElementById('root');
const root = ReactDOM.createRoot(rootelement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);