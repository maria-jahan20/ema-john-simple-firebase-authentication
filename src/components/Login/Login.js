import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
     const [signInWithEmailAndPassword, user,loading,error ] =useSignInWithEmailAndPassword(auth);
     const location=useLocation();
     const from=location.state?.from?.pathname || '/';
     const navigate=useNavigate();
    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }
    if(user){
        navigate(from,{replace:true});
    }
    const handleCreateUser=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return (
      <div className="form-container">
        <div>
          <h2 className="form-title">Log In</h2>
          <form onSubmit={handleCreateUser}>
            <lebel htmlFor="email">Email</lebel>
            <input onBlur={handleEmailBlur} type="email" name="email" required></input>
            <lebel htmlFor="password">Password</lebel>
            <input onBlur={handlePasswordBlur} type="password" name="password" required/>
            <p style={{color:'red'}}>{error?.message}</p>
            <p>{loading && <p>Loading...</p> }</p>
            <div>
              <button className="form-submit">Log in</button>
            </div>
          </form>
          <p>New to Ema-John?<Link className='form-link' to='/signup'>create a new account</Link></p>
        </div>
      </div>
    );
};

export default Login;