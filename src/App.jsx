import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Counter from './components/Counter';
import ColorChangingBackground from './components/ColorChangingBackground';
import Calculator from './components/Calculator';

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
