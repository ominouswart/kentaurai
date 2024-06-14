import { useState } from "react"

export default function Calculator() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleChangeNum1 = e => {
        setNum1(parseFloat(e.target.value));
    }

    const handleChangeNum2 = e => {
        setNum2(parseFloat(e.target.value));
    }

    const handleAdd = _ => {
        setResult(_ => {
            return num1 + num2
        });
    }

    const handleMinus = _ => {
        setResult(_ => {
            return num1 - num2
        });
    }

    const handleMultiply = _ => {
        setResult(_ => {
            return num1 * num2
        });
    }

    const handleDivide = _ => {
        if (num2 === 0) {
            alert('You stupid or what?')
        }
        setResult(_ => {
            return num1 / num2
        });
    }

    return <>
        <input type="number" value={num1} onChange={handleChangeNum1}/>
        <input type="number" value={num2} onChange={handleChangeNum2}/>
        <button type="submit" className="green" onClick={handleAdd}>+</button>
        <button type="submit" className="red" onClick={handleMinus}>-</button>
        <button type="submit" className="blue" onClick={handleMultiply}>*</button>
        <button type="submit" className="yellow" onClick={handleDivide}>/</button>
        <p>Resultatas: {result}</p>
    </>
}