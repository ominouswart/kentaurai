import { useRef, useState } from 'react';
import './App.css';



function App() {

    const id = useRef(1);

    const [sq, setSq] = useState([]);

    const [count, setCount] = useState([]);

    const addSq = _ => {
        setSq(s => [...s, {
            s: sq,
            id: id.current++
        }]);
    }

    const plusOne = id => {
        setCount(c );
    }

    return (
        <div className="App">
            <header className="App-header">
                <button type='button' onClick={addSq}>Prideti</button>
                <div className="black-square-cnt">
                    {
                        sq.map(s =>
                            <div className='black-square' key={s.id} style={{ width: '100px', height: '100px', backgroundColor: 'black', margin: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexDirection: 'column' }}>
                                <b>{count}</b>
                                <button type='button' onClick={plusOne}>+</button>
                            </div>
                        )
                    }
                </div>
            </header>
        </div>
    );
}

export default App;