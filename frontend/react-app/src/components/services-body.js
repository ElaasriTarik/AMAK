import React from 'react';
import '../styles/services-body.css';
import towingServiceIcon from '../illustrations/13245906_5188251.svg';
import mechanic from '../illustrations/mechanic2.jpg';
import carWash from '../illustrations/carwash.svg';

import screwDriver from '../illustrations/screwDriver.svg'
import gearServicesIcon from '../icons/services.svg'

export default function ServicesBody() {
    return (
        <div className='services-body'>
            <div className="services-container">
                <img src={screwDriver} alt="screwdriver" className='screwdriver-ill' />
                <img src={screwDriver} alt="screwdriver" className='screwdriver-ill-2' />
                <div className="services-header">
                    <img src={gearServicesIcon} alt="gear" className='gear-icon' />
                    <h1>Our Services</h1>
                </div>
                <div className="services">
                    <div className='service'>
                        <div className="service-img">
                            <img src={mechanic} alt="mechanic service image" className='serviceImage' />
                        </div>
                        <h2>Car mechanics</h2>
                        <p>Select the mechanics that best suits your need.</p>
                        <button className='lean-more-btn mechanics'>Learn more</button>
                    </div>
                    <div className='service'>
                        <div className="service-img">
                            <img src={carWash} alt="car wash service image" className='serviceImage' />
                        </div>
                        <h2>Car wash</h2>
                        <p>your car is dusty? we can come to your location and wash it.</p>
                        <button className='lean-more-btn carWash'>Learn more</button>
                    </div>
                    <div className='service'>
                        <div className="service-img">

                        </div>
                        <h2>Accessories</h2>
                        <p>Make your car stand out with these fun and beautifull accessories.</p>
                        <button className='lean-more-btn accessories'>Learn more</button>
                    </div>
                    <div className='service'>
                        <div className="service-img">

                        </div>
                        <h2>Spare parts</h2>
                        <p>All diffrent kinds of car parts are sold here.</p>
                        <button className='lean-more-btn spareParts'>Learn more</button>
                    </div>
                    <div className='service'>
                        <div className="service-img">
                            <img src={towingServiceIcon} alt="towing service" className='serviceImage' />
                        </div>
                        <h2>Towing service</h2>
                        <p>Stuck somewhere? we're coming to get you.</p>
                        <button className='lean-more-btn towingService'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}