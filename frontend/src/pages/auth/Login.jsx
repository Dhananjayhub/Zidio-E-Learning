import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="auth-page">
            <div className="auth-form">
                <h2>Login</h2>
                <form action="">
                    <label htmlFor="Email"></label>
                    <input type="email" required />

                    <label htmlFor="Password"></label>
                    <input type="password" required />

                    <button className="common-btn" type="submit">
                        Login
                    </button>
                </form>

                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;