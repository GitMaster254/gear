import React from 'react';
import './Gnav.css'; // Import CSS file for styling

const Gnav = () => {
    return (
        <div className="Gnav">
            <svg className='gear' width='100' height='100'>
                <circle cx='50' cy='50' r='45' fill='red' />
                {/* Gear teeth */}
                <circle cx='50' cy='10' r='5' fill='#333333' />
                <circle cx='63.64' cy='36.36' r='5' fill='#333333' />
                <circle cx='78.57' cy='50' r='5' fill='#333333' />
                <circle cx='63.64' cy='63.64' r='5' fill='#333333' />
                <circle cx='50' cy='90' r='5' fill='#333333' />
                <circle cx='36.36' cy='63.64' r='5' fill='#333333' />
                <circle cx='21.43' cy='50' r='5' fill='#333333' />
                <circle cx='36.36' cy='36.36' r='5' fill='#333333' />
            </svg>
        </div>
    );
};

export default Gnav;
