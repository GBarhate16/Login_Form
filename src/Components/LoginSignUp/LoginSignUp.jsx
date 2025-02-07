import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


 const LoginSignUp = () => {
    const navigate = useNavigate();
    const [action,setAction] = useState("Sign Up");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignUp = () => {
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if (!name || !email || !password) {
            alert("All fields are required!");
            return; // Exit the function if fields are empty
        }

        alert("Account created!");
        setAction("Login");
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to the Login component
    };

    return (
        <div className='container'>
            {isLoggedIn ? (
                <div>
                    <h2>You are logged in</h2>
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </div>
            ) : (
                <>
                    <div className="header">
                        <div className="text">{action}</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        {action==="Login"?<div></div>: <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder="Enter Name" />
                        </div>}
                       
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder="Enter E-mail" />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder="Enter Password"/>
                        </div>
                    </div>
                    {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                    
                    <div className="submit-container">
                        <div className={action==="Login"?"submit gray":"submit"} onClick={handleSignUp}>Sign Up</div>
                        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={handleLoginRedirect}>Login</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default LoginSignUp
