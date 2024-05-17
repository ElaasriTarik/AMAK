import React from 'react';
import { Link } from 'react-router-dom';
import tool from '../illustrations/tool.svg';

import '../styles/signup.css';

export default function SignupPage() {
    return (
        <div>
            <div className="signup-container">
                <div className="signup-form">
                    <form>
                        <h2>Signup</h2>
                        <div className="form-group">
                            <label htmlFor="name">Full name</label>
                            <input type="text" id="name" name="name" required placeholder='full name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder='email' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Username</label>
                            <input type="text" id="confirm-password" name="confirm-password" required placeholder='username' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required placeholder='password' />
                        </div>
                        <button className='signup-btn'>Signup</button>

                        <p className='login-link'>
                            Already have an account? <Link to="/login">Login
                            </Link>
                        </p>

                    </form>
                    <div>
                        {/* {<img src={tool} alt="tool" className='tool' />} */}
                        <svg id="sw-js-blob-svg" className='blob-signin' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                    <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                                    <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <path fill="url(#sw-gradient)" d="M27,-30.7C34.2,-26,39,-16.9,41.1,-6.9C43.3,3,42.9,13.8,37.9,21.4C32.9,29,23.4,33.5,13.7,36.5C4.1,39.5,-5.7,41,-14.4,38.4C-23,35.7,-30.5,28.8,-31.7,21.1C-32.9,13.3,-27.8,4.7,-24.1,-2.1C-20.3,-8.9,-18.1,-13.9,-14.3,-19.2C-10.5,-24.6,-5.3,-30.3,2.3,-33C9.8,-35.7,19.7,-35.5,27,-30.7Z" width="100%" height="100%" transform="translate(50 50)" style={{ transition: "0.3s" }} strokeWidth="0" stroke="url(#sw-gradient)"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>)
}