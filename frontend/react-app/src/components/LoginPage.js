import React from 'react';
import { Link } from 'react-router-dom';
import tool from '../illustrations/tool.svg';
import usrIcon from '../icons/username-50.png';
import '../styles/login.css';
export default function LoginPage() {
    return (
        <div>
            <div className="login-container">
                <div className="login-form">

                    <form>
                        <h2>login</h2>
                        <div className="group">

                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5" />
                                <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            <input type="text" className="input" id="name" name="name" required placeholder='username or email' />
                        </div>
                        <div class="group">
                            <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path>
                            </svg>
                            <input className="input" type="password" placeholder="password" />
                        </div>

                        <button className='login-btn'>login</button>

                        <p className='login-link'>
                            Don't have an account? <Link to="/signup">Sign-up
                            </Link>
                        </p>
                        <p className='forgot-password'><Link to='/forgot_password'>Forgot password?</Link></p>

                    </form>
                    <div>
                        <img src={tool} alt="tool" className='tool' />
                        <svg id="sw-js-blob-svg" className='blob-signin' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                    <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                                    <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <path fill="#92e3a9" d="M27,-30.7C34.2,-26,39,-16.9,41.1,-6.9C43.3,3,42.9,13.8,37.9,21.4C32.9,29,23.4,33.5,13.7,36.5C4.1,39.5,-5.7,41,-14.4,38.4C-23,35.7,-30.5,28.8,-31.7,21.1C-32.9,13.3,-27.8,4.7,-24.1,-2.1C-20.3,-8.9,-18.1,-13.9,-14.3,-19.2C-10.5,-24.6,-5.3,-30.3,2.3,-33C9.8,-35.7,19.7,-35.5,27,-30.7Z" width="100%" height="100%" transform="translate(50 50)" style={{ transition: "0.3s" }} strokeWidth="0" stroke="url(#sw-gradient)"></path>
                        </svg>
                    </div>

                </div>
            </div>
        </div>)
}