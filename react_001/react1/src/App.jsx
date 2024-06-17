import { useState, useEffect } from 'react';
import './App.css';
import './Components/miniCrud/miniCrud.scss';
import './buttons.scss';
import rand from './Functions/rand';


const animals = ['Avis', 'Antis', 'Antilope'];

function App() {

    const [animal, setAnimal] = useState('Avis');
    const [weight, setWeight] = useState('');
    const [list, setList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [editWeight, setEditWeight] = useState('');

    useEffect(_ => {

        setList(JSON.parse(localStorage.getItem('list') ?? '[]'));

    }, []);

    useEffect(_ => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const addToList = _ => {
        setList(l => [{ id: rand(1000000, 9999999), name: animal, weight: weight }, ...l]);
        setWeight('');
    }

    const delAnimal = id => {
        setList(list.filter(l => l.id !== id));
    }

    const openEditModal = (e, a) => {
        e.stopPropagation();
        setCurrentAnimal(a);
        setEditWeight('');
        setIsModalOpen(true);
    }

    const handleEdit = _ => {
        setList(list.map(l => l.id === currentAnimal.id ? { ...l, weight: editWeight } : l));
        setIsModalOpen(false);
        setCurrentAnimal(null);
    }

    const closeModal = _ => {
        setIsModalOpen(false);
        setCurrentAnimal(null);
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

                                            <li key={l.id}>
                                                <span onClick={(e) => openEditModal(e, l)}>Weight: {l.weight} KG</span>
                                                <button style={{ marginLeft: '30px' }} type='button' className='red' onClick={_ => delAnimal(l.id)}>X</button>
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </header>
            {
                isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <h2>Redaguoti</h2>
                            <b>{currentAnimal.name} {currentAnimal.weight} KG</b>
                            <input
                                type="number"
                                value={editWeight}
                                onChange={e => setEditWeight(Number(e.target.value))}
                            />
                            <button type='button' className='green' onClick={handleEdit}>Issaugoti</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default App;