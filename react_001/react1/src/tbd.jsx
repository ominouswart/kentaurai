import { useRef, useState } from 'react';
import './App.css';
import './Components/nd5/Avys.scss';
import AvisId from './Components/nd5/Avys';

const animals = ['karves', 'avys'];

function App() {

    const [avisId, setAvisId] = useState([]);

    const aviuId = _ => {
        const newId = AvisId();
        setId([...id, newId]);
    }

    const karviuId = _ 

    const [animal, setAnimal] = useState([]);

    const fester = animal => {
        setAnimal(a => [...a, animal]);
    }



    return (
        <div className="App">
            <header className="App-header">
                <div className="btn">
                    <button type='button' className='green' onClick={fester}>į ganyklą</button>
                </div>
                <div className="container">

                    <div className="innerContainer border-con">
                        <h2>Karves</h2>
                        {

                        }
                    </div>
                    <div className="innerContainer">
                        <h2>Avys</h2>
                        {

                        }
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;