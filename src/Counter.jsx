import React, { useState } from 'react';
import Navbar from './Navbar';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Navbar />
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;
