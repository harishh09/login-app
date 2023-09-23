import React, { useState } from 'react';
import './login.css';
function Login() {
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const emailValidation=(e)=>{
        var pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        var emailValue= e.target.value
        setEmail(emailValue)
        if(emailValue.match(pattern)){
            setMessage("Valid Email")
            console.log(true);
            }else{
            setMessage("Invalid Email")
            console.log(false);
            }
    };
    return (
        <>
        <span className="heading">Welcome Back</span>
        <form>
        <div className="mb-4">
        <label for="exampleInputEmail1" className="form-label"><span className="head">Email</span></label>
        <input type="email" className="form-control" onChange={emailValidation} value={email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <p className="message">{message}</p>
        <div className="mb-4">
        <label for="exampleInputPassword1" className="form-label"><span className="head">Password</span></label>
        <input type="password" className="form-control"id="exampleInputPassword1" autoComplete="off" />
        </div>
        <div className="mb-4 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1"><div className="after"><span className="head">Remember Me</span></div></label>
        </div>
        <div className="bttn">
            <button type="submit" className="button">Sign In</button>
        <span className="footer">Don't have an account? <b>Create Account</b></span>
        </div>
        </form>
        </>
    );
  }
  export default function LogIn() {
    return (
        <Login />
    );
  }