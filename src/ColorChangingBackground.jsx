import React, { useState } from 'react';
import Navbar from './Navbar';

const ColorChangingBackground = () => {
    const [color, setColor] = useState('white');

    const changeColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    };

    return (
        <>
            <Navbar />
            <h1>Let's Play with Colors.....</h1>
            <div style={{ backgroundColor: color, height: '100vh' }} onClick={changeColor}>
                <h1>Click to change background color</h1>
            </div>
        </>
    );
};

export default ColorChangingBackground;
