import React from 'react';
import sophia from '../src/assests/sophia.png'; // Adjust the path depending on your project structure.

const AboutImage = () => (
    <div className="col-md-3">
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
            {/* Using a standard <img> tag for React.dev */}
            <img
                src={sophia}
                alt="Image of Sophia"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                id="aboutimage"
            />
        </div>
    </div>
);

export default AboutImage;
