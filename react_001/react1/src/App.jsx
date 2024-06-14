import { useState } from 'react';
import './App.css';
import './buttons.scss';
import Calculator from './Components/ws/Calc';

function App() {


    const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>WORKSHOP</h1>
        <p>Paspausta tiek kartu: {count}</p>
        <button type='button' className='white' onClick={_ => setCount(c => c + 1)}>Spausk norint prideti viena</button>
        <Calculator />
      </header>
    </div>
  );
}

export default App;