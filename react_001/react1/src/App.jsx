import { useReducer, useState } from 'react';
import './App.css';
import './buttons.scss';
import countReducer from './Components/015/countReducer';
import * as A from './Actions/counterActions';

function App() {

    const [count1, setCount1] = useState(0);
    const [count2, dispatchCount2] = useReducer(countReducer, 0);
    const [range, setRange] = useState(0);

    // const add1 = _ => {
    //     const action = {
    //         type: T.ADD_1
    //     };
    //     dispatchCount2(action);
    // }

    // const rem1 = _ => {
    //     const action = {
    //         type: T.REM_1
    //     };
    //     dispatchCount2(action);
    // }

    // const addRange = _ => {
    //     const action = {
    //         type: T.ADD_RANGE,
    //         payload: range
    //     };
    //     dispatchCount2(action);
    // }


  return (
    <div className="App">
      <header className="App-header">
        <h1>State: {count1} Reducer: {count2} </h1>
        <div className="button">
            <button type='button' className='green' onClick={_ => setCount1(c => c + 1)}>Add 1 (with state)</button>
            <button type='button' className='white' onClick={_ => dispatchCount2(A.add1())}>Add 1 (with reducer)</button>
            <button type='button' className='yellow' onClick={_ => dispatchCount2(A.rem1())}>Minus 1 (with reducer)</button>
        </div>
        <div className="button">
        <button type='buttons' className='blue' onClick={_ => dispatchCount2(A.addRange(range))}>Add {range} (with reducer)</button>
        <input type="range" min={-99} max={99} step={1} value={range} onChange={e => setRange(+e.target.value)}/>
        </div>
      </header>
    </div>
  );
}

export default App;