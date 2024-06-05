import { useRef, useState } from 'react';
import './App.css';
import './buttons.scss';
import randomColor from './Functions/randColor';

function App() {

    const [count, setCount] = useState(100);
    const [figure, setFigure] = useState('square');
    const [sq, setSq] = useState([]);


    const add1 = _ => {
        setCount(c => c + 1);
    }

    const minus1 = _ => {
        setCount(c => c - 1);
    }

    const reset = _ => {
        setCount(0);
    }

    const big = _ => {
        setCount(c => c * c);
    }

    const changeFigure = _ => {
        setFigure(f => f === 'square' ? 'circle' : 'square')
    }

    const id = useRef(1);

    const addSq = _ => {
        setSq(a => [...a, {
            id: id.current++,
            color: randomColor()    
        }]);
        // setSq(a => {
        //     const aCopy = [...a];
        //     aCopy.push(id.current++);
        //     return aCopy;
        // });
    }

    const removeSqEnd = _ => {
        setSq(a => a.filter((s, i) => i !== a.length - 1));
    }

    const removeSqStart = _ => {
        setSq(a => a.filter((s, i) => i !== 0));
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    <div
                        onClick={changeFigure}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            width: '200px',
                            height: '200px',
                            transition: 'all 0.5s',
                            backgroundColor: figure === 'square' ? 'skyblue' : 'crimson',
                            borderRadius: figure === 'square' ? null : '50%'
                        }}>{count}</div></h1>

                        <div className='sq-bin'>
                            {
                                sq.map((s) => 
                                <div key={s.id} className='sq' style={{
                                    backgroundColor: s.color + '66',
                                    borderColor: s.color
                                }}>
                                    {s.id}
                                    </div>)
                            }
                        </div>
                <div className='buttons'>
                    <button type='button' className='green' onClick={add1}>+1</button>
                    <button type='button' className='red' onClick={minus1}>-1</button>
                    <button type='button' className='white' onClick={reset}>0</button>
                    <button type='button' className='yellow' onClick={big}>**</button>
                    <button type='button' className='green' onClick={addSq}>Add</button>
                    <button type='button' className='green' onClick={removeSqStart}>Remove First</button>
                    <button type='button' className='green' onClick={removeSqEnd}>Remove Last</button>
                </div>


            </header>
        </div>
    );
}

export default App;