import React from "react";
import { useState } from "react";
import './LoginSignup.css';
import email from '../assets/email.png';
import personIcon from '../assets/person.png'
import passwordIcon from '../assets/password.png'

const MyLogin = () => {

    const [action, setAction] = useState("Login")
    return (
        <div className="container">
            <div className="header">
                <div className="text">{ action }</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={ personIcon } alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
                

                <div className="input">
                    <img src={ email } alt="" />
                    <input type="email" placeholder="E-mail" />

                </div>

                <div className="input">
                    <img src={ passwordIcon } alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>   
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>         
        </div>
    )
};

export default MyLogin