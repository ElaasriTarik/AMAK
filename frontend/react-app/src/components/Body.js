import React, { useEffect } from 'react';
import HomeInputs from './HomeInputs';
import ServicesBody from './services-body';
import objects from '../illustrations/OBJECTS.svg'
import triangle from '../illustrations/triangle.svg'
import chains from '../illustrations/chains.svg'
import screwDriver from '../illustrations/screwDriver.svg'
import contentBg from '../illustrations/content-bg.svg'
//import Lottie from 'react-lottie';
//import animationData from '../illustrations/Animation - 1714994312770.json';
import '../styles/body.css';

export default function Body({ mode, style }) {
    //console.log(mode);
    const stylesForText = !mode ? { color: 'white' } : { color: 'black' };
    // chnage body bg-color based on mode

    const bodyElelement = document.getElementsByTagName('body');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        bodyElelement[0].style.backgroundColor = !mode ? 'rgb(26, 26, 26)' : '#e5efef';
        bodyElelement[0].style.color = !mode ? 'white' : 'black';
    }, [mode]);

    return (<>
        <div className="hero" style=
            {!mode ? { backgroundColor: 'rgb(26, 26, 26)', color: 'white' } : {
                backgroundColor: '#e4e4e4',
            }}>
            <div className="hero-content">
                <img src={contentBg} alt="content-bg" className='content-bg' />
                <div className='hero-text'>
                    <h1 style={stylesForText}>Connect with local mechanics – right here!</h1>
                    <p style={stylesForText} className='welcome-slogan'>Discover the best services for your car</p>
                    <HomeInputs mode={mode} />
                </div>
                {/* {<div className="hero-img">
                    <img src={img} alt="hero-img" className='cover-img' />
                </div>} */}
                <img src={objects} alt="objects" className='objects' />

            </div>
            <img src={triangle} alt="triangle" className='triangle-ill' />
            <img src={chains} alt="chains" className='chains-ill' />
        </div>
        <ServicesBody />
    </>
    )
}