import React from 'react';
import Header from './Header';
import '../styles/profile.css';
import person from '../images/person-profile.svg';
export default function Profile() {
    let condition = true;
    return (
        <>
            <Header />
            <div className="profile-area">
                <div className='profile-image-name'>
                    <div className='profile-image'>
                        <img src={person} alt="profile" />
                    </div>
                    <div className='profile-info'>
                        <h2>John Doe</h2>
                    </div>
                </div>
                <div className='profile-details'>
                    <h3>Personal details</h3>
                    <div className='details'>
                        <div className='detail full-name'>
                            <label htmlFor='fullname'>Full Name</label>
                            <input readOnly={condition} type='text' id='fullname' value='John Doe' />
                        </div>
                        <div className='detail email'>
                            <label htmlFor='email'>Email</label>
                            <input readOnly={condition} type='email' id='email' value='someone@yahoo.com' />
                        </div>
                        <div className='detail password'>
                            <label htmlFor='password'>Password</label>
                            <input readOnly={condition} type='password' id='password' value='password123@' />
                        </div>
                        <div className='detail phone'>
                            <label htmlFor='phone'>Phone</label>
                            <input readOnly={condition} type='tel' id='phone' value='+234-1-2612862' />
                        </div>
                        <div className='detail address'>
                            <label htmlFor='address'>Address</label>
                            <input readOnly={condition} type='text' id='address' value='13 Festival Road, Victoria Island, Lagos' />
                        </div>

                    </div>
                </div>
                <div className='vehicle-details'>
                    <h3>vehicle details</h3>
                    <div className='details'>
                        <div className='detail vin'>
                            <label htmlFor='vin'>Vehicle Identification Number (VIN)</label>
                            <input readOnly={condition} type='text' id='vin' value='B1 228TR' />
                        </div>
                        <div className='detail make&model'>
                            <label htmlFor='make&model'>Make and Model</label>
                            <input readOnly={condition} type='text' id='make&model' value='Ford F-150' />
                        </div>
                        <div className='detail Mileage'>
                            <label htmlFor='Mileage'>Mileage</label>
                            <input readOnly={condition} type='text' id='Mileage' value='12033 km' />
                        </div>
                        <div className='detail currIssues'>
                            <label htmlFor='currIssues'>Current Issues</label>
                            <input readOnly={condition} type='text' id='currIssues' value='Engine fails, Brake problems' />
                        </div>
                        <div className='edit-profile'>
                            <button className='edit-profile-btn'>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}