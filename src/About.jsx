import React from 'react';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';

const About = () => (
    <div className="container">
        <h1>About the Designer</h1>
        <div className="row">
            <AboutImage />
            <AboutContent />
        </div>
    </div>
);

export default About;

