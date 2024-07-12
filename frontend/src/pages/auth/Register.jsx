import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="auth-page">
            <div className="auth-form">
                <h2>Register</h2>
                <form action="">
                    <label htmlFor="Name">Name</label>
                    <input type="text" required placeholder='name' />

                    <label htmlFor="Email">Email</label>
                    <input type="email" required />

                    <label htmlFor="Password">Password</label>
                    <input type="password" required />

                    <button className="common-btn" type="submit">
                        Register
                    </button>
                </form>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;