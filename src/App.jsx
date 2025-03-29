import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Counter from './Counter';
import ColorChangingBackground from './ColorChangingBackground';
import Calculator from './Calculator';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/background" element={<ColorChangingBackground />} />
            <Route path="/calculator" element={<Calculator />} />
        </Routes>
    </Router>
);

export default App;
