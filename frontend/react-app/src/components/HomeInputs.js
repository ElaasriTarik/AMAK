import React from 'react';
import locatioIcon from '../icons/icons8-location-48.png';
import serviceIcon from '../icons/icons8-tools-50.png';
import '../styles/homeInputs.css';

export default function HomeInputs() {
    return (
        <div className='home-inputs'>
            <p className='home-inputs-title'>Having trouble with your car?</p>
            <div className='input location-input'>
                <img src={locatioIcon} alt='location' className='input-icons' />
                <input type='text' placeholder='Enter your location' />
            </div>
            <div className='input serive-input'>
                <img src={serviceIcon} alt='email' className='input-icons' />
                <input type='text' placeholder='What service are you looking for?' />
            </div>
            <button className='getStartedBtn'>Get Started</button>
        </div >
    )
}