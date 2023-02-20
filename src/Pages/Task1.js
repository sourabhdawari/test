import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Task1() {
  //states
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    
    function operation(operator) {
  

      switch (operator) {
        case "Add":
          setResult(parseFloat(num1) + parseFloat(num2));
          break
        case "Subtract":
          setResult(parseFloat(num1) - parseFloat(num2));
          break
        case "Multiply":
          setResult(parseFloat(num1) * parseFloat(num2));
          break
          case "Divide":
            setResult(parseFloat(num1) / parseFloat(num2));
            break
        default:
          break;
      }
    }
    

  return (
    <div className='App-header'>
        <div>
        <label>Number 1:</label>
        <input type="number" class="form-control" id="num1" value={num1} onChange={e => setNum1(e.target.value)} />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="number" class="form-control" id="num2" value={num2} onChange={e => setNum2(e.target.value)} />
      </div>
      <button class="btn btn-primary m-4" onClick={()=>operation("Add")}>Add</button>
      <button class="btn btn-primary m-4" onClick={()=>operation('Subtract')}>Subtract</button>
      <button class="btn btn-primary m-4" onClick={()=>operation('Multiply')}>Multiply</button>
      
      <button class="btn btn-primary m-4" required disabled={num2==="0"}  onClick={()=>operation("Divide")}>Divide</button>
      <div>Result: {result}</div>
      <Link className="btn btn-primary m-5" to="/">Home</Link>
    </div>
  )
}
