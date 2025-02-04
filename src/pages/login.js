import React, { useState } from 'react';
import '../index.css'

function Login() {

    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const [loginMessage, setLoginMessage] = useState('');    

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const ResetFun = () => {
        setValues({
            username: '',
            password: ''})
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setLoginMessage('Login Successfull')
    }

    return(
        <div className='container'>
            <h1 className='headerclass'>Login</h1>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="username">Username*</label>
                <input type='text' placeholder='Enter Username' name='username'
                    onChange={(e) => handleChanges(e)} value={values.username} />

                <label htmlFor="password">Password*</label>
                <input type='password' placeholder='Enter Your Password' name='password'
                    onChange={(e) => handleChanges(e)} value={values.password} />

                <button type='button' onClick={ResetFun}>Reset</button>
                <button type='submit'>Login</button>
                {loginMessage && <p>{loginMessage}</p>}
            </form>
        </div>
    )
}

export default Login;