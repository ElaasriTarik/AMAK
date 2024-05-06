import React from 'react';
import logo from '../icons/logo.svg';
import ModeSwitcher from './ModeSwitcher';

import '../styles/header.css';

export default function Header({ mode, setMode, style }) {
    //console.log(style);
    return (
        <div className="app-nav">
            <nav className="navBar" style={style}>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className='loginArea'>
                    <ModeSwitcher mode={mode} setMode={setMode} />
                    <button className='signupBtn'>Sign Up</button>
                    <button className='loginBtn'>Login</button>
                </div>
            </nav>
        </div>
    );
}
