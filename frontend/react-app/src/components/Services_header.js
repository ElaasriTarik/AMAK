import React from 'react';
import carService from '../icons/car-service-50.png'
import carWash from '../icons/car-wash-50.png'
import carParts from '../icons/car-parts-64.png'
import carAccessories from '../icons/car-accessories-48.png'
import carVulc from '../icons/car-vulcanizer-48.png'
import '../styles/services_header.css'

export default function Services_header() {


    return (

        <div className='car-services'>
            <ul>
                <li>
                    <div className='header-service-icon'>
                        <img className='service-icon' src={carService} alt='' />
                    </div>
                    <a href='#'>Mechanics</a>
                </li>
                <li>
                    <div className='header-service-icon'>
                        <img className='service-icon' src={carWash} alt='' />
                    </div>
                    <a href='#'>Car wash</a>
                </li>
                <li>
                    <div className='header-service-icon'>
                        <img className='service-icon' src={carParts} alt='' />
                    </div>
                    <a href='#'>Spare parts</a>
                </li>
                <li>
                    <div className='header-service-icon'>
                        <img className='service-icon' src={carAccessories} alt='' />
                    </div>
                    <a href='#'>Accessories</a>
                </li>
                <li>
                    <div className='header-service-icon'>
                        <img className='service-icon' src={carVulc} alt='' />
                    </div>
                    <a href='#'>Mobile Vulcanizes</a>
                </li>
            </ul>
        </div>

    )
}