import { useState } from 'react';
import './App.css';
import './Components/nd5/Avys.scss';
import AvisId from './Components/nd5/Avys';
import KarveId from './Components/nd5/Karve';

const animals = ['karves', 'avys'];

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {

    const [avisId, setAvisId] = useState([]);
    const [karveId, setKarveId] = useState([]);

    // const aviuId = _ => {
    //     const newId = AvisId();
    //     setAvisId([...avisId, newId]);
    // }

    // const karviuId = _ => {
    //     const newId = KarveId();
    //     setKarveId([...karveId, newId]);
    // }

    const fester = _ => {
        animals.forEach(a => {
            const randomNumber = rand(5, 10);

            if (a === 'avys') {
                const newAvis = Array.from({ length: randomNumber }, _ => AvisId());
                setAvisId(a => [...a, ...newAvis]);
            } else if (a === 'karves') {
                const newKarves = Array.from({ length: randomNumber }, _ => KarveId());
                setKarveId(k => [...k, ...newKarves]);
            }
        });
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
                        {karveId.map((id, i) => (
                            <div key={i} className='karve'>{id}</div>
                        ))}
                    </div>
                    <div className="innerContainer">
                        <h2>Avys</h2>
                        {avisId.map((id, i) => (
                            <div key={i} className='avis'>{id}</div>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;