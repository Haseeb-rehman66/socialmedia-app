import React from 'react';
import './Register.css';

function Register() {
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
                    <input placeholder="Username" className="logininput" />
                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <input placeholder="Password Again" className="logininput" />
                    <button className="loginbutton">Sign Up</button>
                    <button className="loginregisterbutton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register