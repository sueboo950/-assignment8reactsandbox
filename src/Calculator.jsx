import React, { useState } from 'react';

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
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <button onClick={() => calculate('+')}>+</button>
            <button onClick={() => calculate('-')}>-</button>
            <button onClick={() => calculate('*')}>*</button>
            <button onClick={() => calculate('/')}>/</button>
            <h2>Result: {result}</h2>
        </div>
    );
};

export default Calculator;
