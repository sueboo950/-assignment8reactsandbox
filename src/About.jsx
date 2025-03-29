import React from 'react';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';
import Navbar from './Navbar';

const About = () => (
    <div className="container">
        <Navbar />
        <h1>About the Designer</h1>
        <div className="row">
            <AboutImage />
            <AboutContent />
        </div>
    </div>
);

export default About;

