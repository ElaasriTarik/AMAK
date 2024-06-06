import React from 'react';
import Header from './Header';
import '../styles/profile.css';
import person from '../images/person-profile.svg';
export default function Profile() {
    const [condition, changeCondition] = React.useState(true);

    // changing the input status from static to editable...
    let saveBtnStyles = {
        backgroundColor: '#7becdb',
    }
    window.onload = () => {
        const editProfile = document.querySelector('.edit-profile-btn');
        editProfile.addEventListener('click', () => {
            console.log('clicked');
            changeCondition(prev => !prev)

            saveBtnStyles = {
                filter: 'grayscale(.3)',
            }

        });
    }
    // starting point for input values
    const inputValues = {
        fullname: 'John Doe',
        email: 'someone@yahoo.com',
        password: 'password123@',
        phone: '+234-1-2612862',
        address: '13 Festival Road, Victoria Island, Lagos',
        vin: 'B1 228TR',
        makeAndModel: 'Ford F-150',
        mileage: 12099,
        currIssues: 'Engine fails, Brake problems',

    }
    const [values, changeValues] = React.useState(inputValues)
    function changeInputsVals(event) {
        changeValues((prev) => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }
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
                            <input readOnly={condition} type='text' id='fullname' value={values.fullname} onChange={(e) => changeInputsVals(e)} />
                        </div>
                        <div className='detail email'>
                            <label htmlFor='email'>Email</label>
                            <input readOnly={condition} type='email' id='email' value={values.email} onChange={(e) => changeInputsVals(e)} />
                        </div>
                        <div className='detail password'>
                            <label htmlFor='password'>Password</label>
                            <input readOnly={condition} type='password' id='password' value={values.password} onChange={(e) => changeInputsVals(e)} />
                        </div>
                        <div className='detail phone'>
                            <label htmlFor='phone'>Phone</label>
                            <input readOnly={condition} type='tel' id='phone' value={values.phone} onChange={(e) => changeInputsVals(e)} />
                        </div>
                        <div className='detail address'>
                            <label htmlFor='address'>Address</label>
                            <input readOnly={condition} type='text' id='address' value={values.address} onChange={(e) => changeInputsVals(e)} />
                        </div>

                    </div>
                </div>
                <div className='vehicle-details'>
                    <h3>vehicle details</h3>
                    <div className='details'>
                        <div className='detail vin'>
                            <label htmlFor='vin'>Vehicle Identification Number (VIN)</label>
                            <input readOnly={condition} type='text' id='vin' value={values.vin} onChange={(e) => changeInputsVals(e)} />
                        </div>
                        <div className='detail make&model'>
                            <label htmlFor='make&model'>Make and Model</label>
                            <input readOnly={condition} type='text' id='makeAndModel' value={values.makeAndModel} onChange={(e) => changeInputsVals(e)} />
                        </div>
                        <div className='detail Mileage'>
                            <label htmlFor='Mileage'>Mileage (Km)</label>
                            <input readOnly={condition} type='text' id='mileage' value={values.mileage} onChange={(e) => changeInputsVals(e)} />
                        </div>
                        <div className='detail currIssues'>
                            <label htmlFor='currIssues'>Current Issues</label>
                            <input readOnly={condition} type='text' id='currIssues' value={values.currIssues} onChange={(e) => changeInputsVals(e)} />
                        </div>
                        <div className='edit-profile'>
                            <button className='edit-profile-btn'>Edit Profile</button>
                            <button className='save-profile-btn' style={saveBtnStyles}>Save</button>
                        </div>
                    </div>
                </div>
                <div className='history'>
                    <h3>history</h3>
                </div>
            </div>
        </>
    )
}