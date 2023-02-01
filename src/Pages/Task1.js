import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Task1() {
  //states
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    
  //operations
    const Add = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
      };
    
      const Subtract = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
      };
    
      const Multiply = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
      };
    
      const Divide = () => {
        setResult(parseFloat(num1) / parseFloat(num2));
      };
  return (
    <div className='App-header'>
        <div>
        <label>Number 1:</label>
        <input type="text" class="form-control" id="num1" value={num1} onChange={e => setNum1(e.target.value)} />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="text" class="form-control" id="num2" value={num2} onChange={e => setNum2(e.target.value)} />
      </div>
      <button class="btn btn-primary m-4" onClick={Add}>Add</button>
      <button class="btn btn-primary m-4" onClick={Subtract}>Subtract</button>
      <button class="btn btn-primary m-4" onClick={Multiply}>Multiply</button>
      <button class="btn btn-primary m-4" onClick={Divide}>Divide</button>
      <div>Result: {result}</div>
      <Link className="btn btn-primary m-5" to="/">Home</Link>
    </div>
  )
}
