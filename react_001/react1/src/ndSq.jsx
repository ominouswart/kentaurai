import { useEffect, useState } from 'react';
import './App.css';
import './buttons.scss';
import rand from './Functions/rand';
import Sq from './Components/nd6/Sq';
import './Components/nd6/squares.scss';


function App() {

    const [sq, setSq] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(_ => {
        setTimeout(_ => {
        setSq(JSON.parse(localStorage.getItem('sq') ?? '[]'));
    });
    }, []);

    useEffect(_ => {
        if (sq === null) {
            return;
        }
        localStorage.setItem('sq', JSON.stringify(sq));
    }, [sq]);

    const addSq = _ => {
        const randomNumber = rand(5, 10);
        const newSquares = Array.from({ length: randomNumber },_ => ({id: rand(1010, 9090)}));
        setHistory(h => [...h, sq]);
        setSq(s => [...(s ?? []), ...newSquares]);
    }

    const removeSq = _ => {
        setHistory(h => [...h, sq]);
        setSq([]);
    }

    const undoSq = _ => {
        if (history.length === 0) {
            return;
        }
        const previousState = history[history.length - 1];
        setHistory(h => h.slice(0, -1));
        setSq(previousState);
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    {
                        sq !== null
                            ?
                            sq.length
                                ?
                                sq.map(s => <Sq key={s.id} sq={s} />)
                                :
                                <div>Empty</div>
                            :
                            <div>..</div>
                    }
                </div>
                <div className="buttons">
                <button type='button' className='green' onClick={addSq}>Prideti</button>
                <button type='button' className='red' onClick={removeSq}>Istrinti</button>
                <button type='button' className='yellow' onClick={undoSq}>Atgal</button>
                </div>
            </header>
        </div>
    );
}

export default App;