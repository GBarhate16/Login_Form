import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUp.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [action] = useState("Sign Up");

    const handleLogin = () => {
        if (!email || !password) {
            alert("Email and password are required!");
            return; // Exit the function if fields are empty
        }

        // Perform login logic here
        alert("Logged in successfully!");
    };

    
    const handleSignRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input 
                        type="email" 
                        placeholder="Enter E-mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>Login</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={handleSignRedirect}>SignUp</div>
            </div>
        </div>
    );
}

export default Login;
