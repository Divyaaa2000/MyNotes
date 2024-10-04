import React, { useState } from 'react';
import './LoginSignupPopup.css'; 

const Login = ({ closePopup }) => {
    const [isLogin, setIsLogin] = useState(true); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); 

 
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

   
    const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

     
        setError('');

      
        if (!validateEmail(email)) {
            setError("Please enter a valid email");
            return;
        }

        
        if (!validatePassword(password)) {
            setError("Password must be at least 6 characters long");
            return;
        }

        
        if (!isLogin && !validateConfirmPassword(password, confirmPassword)) {
            setError("Passwords do not match");
            return;
        }

   
        setError('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-icon" style={{ cursor: 'pointer' }} onClick={closePopup}>X</span>
                
                <h2>{isLogin ? 'Login' : 'Signup'}</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    {error.includes("email") && <p style={{ color: 'red' }}>{error}</p>}

                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    {error.includes("Password") && <p style={{ color: 'red' }}>{error}</p>}

                    {!isLogin && (
                        <>
                            <input 
                                type="password" 
                                placeholder="Confirm Password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required 
                            />
                            {error.includes("match") && <p style={{ color: 'red' }}>{error}</p>}
                        </>
                    )}
                    
                    <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
                </form>
                
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Create an Account' : 'Already have an account?'}
                </button>
            </div>
        </div>
    );
};

export default Login;
