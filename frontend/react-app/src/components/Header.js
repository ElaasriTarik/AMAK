import React, { useState, useEffect } from 'react';
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

        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isActive, setIsActive] = useState(false);
    function displayMenu() {
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

    })
    // check if any title is clicked... and do whatever styling needed
    const services = document.querySelector('.services')

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
                            <li><a href="../index.js">Home</a></li>
                            <li><a href="services.js" className='services' onMouseOver={changeTitleState} onMouseLeave={changeTitleState}>Services</a></li>
                            <li><a href="about.js">About</a></li>
                            <li><a href="contact.js">Contact</a></li>
                        </ul>
                        <div className='loginArea'>
                            <ModeSwitcher mode={mode} setMode={setMode} />
                            <button className='signupBtn'>Sign Up</button>
                            <button className='loginBtn'>Login</button>
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
                                    <li><a href="../index.js">Home</a></li>
                                    <li><a href="services.js" className='services' onMouseOver={changeTitleState} onMouseLeave={changeTitleState}>Services</a></li>
                                    <li><a href="about.js">About</a></li>
                                    <li><a href="contact.js">Contact</a></li>
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
