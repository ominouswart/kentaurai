import { useState, useEffect } from 'react';
import './App.css';
import './Components/miniCrud/miniCrud.scss';
import './buttons.scss';
import rand from './Functions/rand';


const animals = ['Avis', 'Antis', 'Antilope'];

function App() {

    const keyProp = rand(1000000, 9999999);

    const [animal, setAnimal] = useState('Avis');
    const [weight, setWeight] = useState('');
    const [list, setList] = useState([]);

    useEffect(_ => {

        setList(JSON.parse(localStorage.getItem('list') ?? '[]'));

    }, []);

    useEffect(_ => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const addToList = _ => {
        setList(l => [{ id: rand(1000000, 9999999), name: animal, weight: weight }, ...l]);
    }

    const delAnimal = id => {
        setList(list.filter(l => l.id !== id));
    }


    return (
        <div className="App">
            <header className="App-header">
                <fieldset style={{ marginBottom: '30px' }}>
                    <legend>Prideti nauja gyvuna</legend>
                    <select value={animal} onChange={e => setAnimal(e.target.value)}>
                        {
                            animals.map(a => <option key={a} value={a}>{a}</option>)
                        }
                    </select>
                    <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} />
                    <div className="myg">
                        <button type='button' className='green' onClick={addToList}>Prideti</button>
                    </div>
                </fieldset>

                <div className="cont">
                    {
                        animals.map(a => (
                            <div key={a} className='inCont'>
                                <h2>{a}</h2>
                                <ul>
                                    {
                                        list.filter(l => l.name === a).map(l => (

                                            <li key={l.id}>Weight: {l.weight} KG
                                            <button style={{marginLeft: '30px'}} type='button' className='red' onClick={_ => delAnimal(l.id)}>X</button>
                                            </li>
                                            
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </header>
        </div>
    );
}

export default App;