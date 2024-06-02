import React from 'react';
import locatioIcon from '../icons/icons8-location-48.png';
import serviceIcon from '../icons/icons8-tools-50.png';
import '../styles/homeInputs.css';

export default function HomeInputs({ mode }) {

    // getting mode and setting the right style for the input fields
    const inputStyle = mode ? { backgroundColor: 'rgb(186, 190, 185);', color: '#262626' } : {
        backgroundColor: '#e4e4e4',
        color: 'black'
    };

    return (
        <div className='home-inputs'>
            <p className='home-inputs-title' style={mode ? { color: 'black' } : { color: '#fff' }}>Having trouble with your car?</p>
            <div className='input location-input'>
                <img src={locatioIcon} alt='location' className='input-icons' />
                <input type='text' placeholder='Enter your location' style={inputStyle
                } />
            </div>
            <div className='input serive-input'>
                <img src={serviceIcon} alt='email' className='input-icons' />
                <input type='text' placeholder='What service are you looking for?' style={inputStyle
                } />
            </div>
            <button className='getStartedBtn'>Get Started</button>
        </div >
    )
}