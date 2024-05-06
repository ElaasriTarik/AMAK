import React, { useState } from "react";
import '../styles/modeSwitcher.css'

export default function ModeSwitcher({ mode, setMode }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        setMode(prev => !prev);
    }

    return (
        <div className={`container ${isActive ? 'bg' : ''}`} onClick={handleClick}>
            <span className={`outer_circle ${isActive ? 'move' : ''}`}>
                <span className={`inner_circle ${isActive ? 'innerMove' : ''}`}></span>
            </span>
        </div>
    )
}