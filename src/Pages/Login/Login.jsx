import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">SocialmediaApp</h3>
                <span className="logindesc">
                    Connect with friends and the world around you on SocialmediaApp
                </span>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <button className="loginbutton">Log In</button>
                    <span className="loginforgot">Forgot Password</span>
                    <button className="loginregisterbutton">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login