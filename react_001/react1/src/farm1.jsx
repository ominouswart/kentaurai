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


    const fester = _ => {
        animals.forEach(a => {
            const randomNumber = rand(5, 20);

            if (a === 'avys') {
                const newAvis = Array.from({ length: randomNumber }, _ => AvisId());
                setAvisId(a => [...a, ...newAvis]);
            } else if (a === 'karves') {
                const newKarves = Array.from({ length: randomNumber }, _ => KarveId());
                setKarveId(k => [...k, ...newKarves]);
            }
        });
    }

    const moveKarve = id => {
        setKarveId(kar => {
            const karveMove = kar.find(k => k.id === id);
            if(karveMove) {
                setAvisId(a => [...a, karveMove]);
                return karveId.filter(k => k.id !== id);
            }
            return karveId;
        });
    }

    const moveAvis = id => {
        setAvisId(av => {
            const avisMove = av.find(a => a.id === id);
            if(avisMove) {
                setKarveId(k => [...k, avisMove]);
                return avisId.filter(a => a.id !== id);
            }
            return avisId;
        });
    }

    console.log(karveId);


    return (
        <div className="App">
            <header className="App-header">
                <div className="btn">
                    <button type='button' className='green' onClick={fester}>į ganyklą</button>
                </div>
                <div className="container">
                <h2>Karves {karveId.length}</h2>
                    <div className="innerContainer border-con">
                        
                        {karveId.map((k) => (
                            <div key={k.id} className={`${k.type}`} onClick={_ => moveKarve(k.id)}>{k.id}</div>
                        ))}
                    </div>
                    <h2>Avys {avisId.length}</h2>
                    <div className="innerContainer">
                        
                        {avisId.map((a) => (
                            <div key={a.id} className={`${a.type}`} onClick={_ => moveAvis(a.id)} >{a.id}</div>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;