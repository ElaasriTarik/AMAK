import React from 'react';
//import Lottie from 'react-lottie';
//import animationData from '../illustrations/Animation - 1714994312770.json';
import '../styles/index.css';
import '../styles/body.css';
import img from '../images/2150377026.jpg';
export default function Body({ mode }) {
    //console.log(mode);
    const stylesForText = !mode ? { color: 'white' } : { color: 'black' };
    return (
        <div className="hero" style=
            {!mode ? { backgroundColor: 'rgb(11, 11, 11)', color: 'white' } : { backgroundColor: '#fff', color: 'black' }}>
            <div className="hero-content">
                <div className='hero-text'>
                    <h1 style={stylesForText}>WELCOME TO OUR WEBSITE</h1>
                    <p style={stylesForText}>Discover the best services for your car</p>
                    <button className='getStartedBtn' style={stylesForText}>Get Started</button>
                </div>
                <div className="hero-img">
                    <img src={img} alt="hero-img" className='cover-img' />
                </div>
            </div>
        </div>
    )
}