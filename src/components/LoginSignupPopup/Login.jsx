import React, { useState } from 'react';
import './LoginSignupPopup.css'; 

const Login = ({ closePopup }) => {
    const [isLogin, setIsLogin] = useState(true); 

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-icon" style={{cursor:'pointer'}} onClick={closePopup}>&times;</span>
                
                <h2>{isLogin ? 'Login' : 'Signup'}</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    {!isLogin && <input type="password" placeholder="Confirm Password" required />}
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
