import React, { useState } from 'react';
import Navbar from './Navbar';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const calculate = (operator) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let calcResult;

        switch (operator) {
            case '+':
                calcResult = number1 + number2;
                break;
            case '-':
                calcResult = number1 - number2;
                break;
            case '*':
                calcResult = number1 * number2;
                break;
            case '/':
                calcResult = number1 / number2;
                break;
            default:
                return;
        }

        setResult(calcResult);
    };

    return (
        <>
            <Navbar />
            <h1>Calculator</h1>
            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter second number"
                />
                <div>
                    <button onClick={() => calculate('+')}>+</button>
                    <button onClick={() => calculate('-')}>-</button>
                    <button onClick={() => calculate('*')}>*</button>
                    <button onClick={() => calculate('/')}>/</button>
                </div>
                <h2>Result: {result}</h2>
            </div>
        </>
    );
};

export default Calculator;
