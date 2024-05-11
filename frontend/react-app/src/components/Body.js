import React, { useEffect } from 'react';
import HomeInputs from './HomeInputs';
//import Lottie from 'react-lottie';
//import animationData from '../illustrations/Animation - 1714994312770.json';
import '../styles/body.css';
import img from '../images/2150377026.jpg';
export default function Body({ mode, style }) {
    //console.log(mode);
    const stylesForText = !mode ? { color: 'white' } : { color: 'black' };
    // chnage body bg-color based on mode

    const bodyElelement = document.getElementsByTagName('body');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        bodyElelement[0].style.backgroundColor = !mode ? 'rgb(11, 11, 11)' : 'rgb(228, 228, 228)';
        bodyElelement[0].style.color = !mode ? 'white' : 'black';
    }, [mode]);

    return (
        <div className="hero" style=
            {!mode ? { backgroundColor: 'rgb(11, 11, 11)', color: 'white' } : {
                backgroundColor: '#e4e4e4',
            }}>
            <div className="hero-content">
                <div className='hero-text'>
                    <h1 style={stylesForText}>find top-rated parts,
                        and connect with local mechanics – all right here!</h1>
                    <p style={stylesForText} className='welcome-slogan'>Discover the best services for your car</p>
                    <HomeInputs mode={mode} />
                </div>
                <div className="hero-img">
                    <img src={img} alt="hero-img" className='cover-img' />
                </div>
            </div>
        </div>
    )
}