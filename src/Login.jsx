import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/login', values)
        .then(res => {
            console.log('ok')
        })
        .catch(err => console.log(err));
    }
    return(
        <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-50'>
                <h2>Sing In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='enter Email' name='email' autoComplete='off' 
                        onChange={e=> setValues({...values, email: e.target.value})} className='form-control rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type="password" placeholder='enter Password' name='password' 
                        onChange={e=> setValues({...values, password: e.target.value})} className='form-control rounded-0'/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You'er agree to aour tearms and polices</p>
                    <button type="button" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Accont</button>
                </form>
            </div>
        </div>
    )
}