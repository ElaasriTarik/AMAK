import React from 'react';
import '../styles/index.css';
import '../styles/body.css';

export default function Body({ mode }) {
    console.log(mode);
    return (
        <div className="hero" style={!mode ? { backgroundColor: 'rgb(11, 11, 11)', color: 'white' } : { backgroundColor: '#fff', color: 'black' }}>
            <h1>Body</h1>
        </div>
    )
}