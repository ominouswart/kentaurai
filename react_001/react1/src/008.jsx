import { useEffect, useRef, useState } from 'react';
import './App.css';
import './buttons.scss';


function App() {

    const text2 = useRef();

    const [text1, setText1] = useState('');
    const [error, setError] = useState(false);
    const [h1, setH1] = useState('CONTROLLED INPUTS');
    const [text3, setText3] = useState('');

    const [texts, setTexts] = useState({textA: '', textB: '', textC: ''});
    const [color, setColor] = useState('#282c34');
    const [range, setRange] = useState(30);
    const [select, setSelect] = useState(3);

    const animals = [
        {id: 1, name: 'bebras'},
        {id: 2, name: 'lape'},
        {id: 3, name: 'vilkas'},
        {id: 4, name: 'zuikis'},
        {id: 5, name: 'barsukas'}
    ];

    useEffect(_ => {
        text2.current.focus();
    }, []);

    const handleText1 = e => {
        if (e.target.value.length > 5) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        setText1(e.target.value);
    }

    const handleH1 = e => {
        setText3(e.target.value);
    }

    const handleTexts = e => {
        setTexts(t => ({ ...t, [e.target.name]: e.target.value }))
    }

    // garbage method to read inputs
    const readRed = _ => {
        // const el = document.querySelector('#text2'); // never!
        // el is text2
        console.log('text2:', text2.current.value);
    }

    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: color}}>
                <h2 style={{fontSize: range + 'px'}}>{h1}</h2>

                <fieldset>
                    <legend>TEXT</legend>
                    <input type='text' value={text1} onChange={handleText1} style={{ backgroundColor: error ? 'crimson' : null }} />
                    <input type='text' ref={text2} />
                    <input type='text' value={text3} onChange={handleH1} />
                    <button type='button' className='blue' onClick={_ => console.log('text1:', text1)}>READ 1</button>
                    <button type='button' className='red' onClick={readRed}>READ 2</button>
                    <button type='button' className='yellow' onClick={_ => setH1(text3)}>Change</button>
                </fieldset>

                <fieldset>
                    <legend>MORE TEXT</legend>
                    <input type='text' value={texts.textA ?? ''} name='textA' onChange={handleTexts} />
                    <input type='text' value={texts.textB ?? ''} name='textB' onChange={handleTexts} />
                    <input type='text' value={texts.textC ?? ''} name='textC' onChange={handleTexts} />
                    <button type='button' className='red' onClick={_ => console.log('texts:', texts)}>READ ALL TEXTS</button>

                </fieldset>

                <fieldset>
                    <legend>COLOR & RANGE</legend>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
                    <input type="range" min={20} max={60} value={range} onChange={e => setRange(+e.target.value)}/>
                </fieldset>

                <fieldset>
                    <legend>SELECT</legend>
                    <select value={select} onChange={e => setSelect(+e.target.value)}>
                        {
                            animals.map(a => <option key={a.id} value={a.id}>{a.name}</option>)
                        }
                    </select>
                    <button type='button' className='blue' onClick={_ => console.log('what animal:', select, animals.find(a => a.id === select).name)}>what?</button>
                </fieldset>
            </header>


        </div>
    );
}

export default App;