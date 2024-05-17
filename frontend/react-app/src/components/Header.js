import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons/logo.svg';
import '../styles/header.css';
import ModeSwitcher from './ModeSwitcher';
import Services_header from './Services_header'


export default function Header({ mode, setMode, style }) {
    //console.log(style);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isActive, setIsActive] = useState(false);
    function displayMenu() {
        console.log(isActive);
        setIsActive(!isActive);
    }

    useEffect(() => {
        if (windowWidth < 868) {
            if (isActive) {
                document.querySelector('.mobile-header-titles').style.display = 'flex';
            } else {
                document.querySelector('.mobile-header-titles').style.display = 'none';
            }
        }

    }, [isActive])
    // check if any title is clicked... and do whatever styling needed
    //const services = document.querySelector('.services')

    const [titleState, setTitleState] = useState(false);

    function changeTitleState() {
        setTitleState(!titleState)
    }

    return (
        <div className="app-nav">
            <nav className="navBar" style={style}>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                {windowWidth > 868 ? (
                    <>
                        <ul className='header-titles'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="services.js" className='services' onMouseOver={changeTitleState} onMouseLeave={changeTitleState}>Services</Link></li>
                            <li><Link to="about.js">About</Link></li>
                            <li><Link to="contact.js">Contact</Link></li>
                        </ul>
                        <div className='loginArea'>
                            <ModeSwitcher mode={mode} setMode={setMode} />
                            <Link to="/signup">
                                <button className='signupBtn'>Sign Up</button>
                            </Link>
                            <Link to="/login">
                                <button className='loginBtn'>Login</button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className='loginArea'>
                        <ModeSwitcher mode={mode} setMode={setMode} />
                        <button className='signupBtn'>Sign Up</button>
                        <button className='loginBtn'>Login</button>

                        <div className='hamburger'>
                            <img src="https://img.icons8.com/ios/50/ffffff/menu--v5.png" alt="menu" className="hamburger-img" onClick={displayMenu} />
                            <div className='mobile-header'>
                                <ul className='mobile-header-titles'>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to="services.js" className='services' onMouseOver={changeTitleState} onMouseLeave={changeTitleState}>Services</Link></li>
                                    <li><Link to="about.js">About</Link></li>
                                    <li><Link to="contact.js">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {titleState && <Services_header />}
            </nav>
        </div>
    );
}
