import { useRef, useState } from 'react';
import './App.css';
import './Components/nd4/trees.scss';

function App() {

    const id = useRef(1);

    const [oak, setOak] = useState([]);
    const [birch, setBirch] = useState([]);
    const [maple, setMaple] = useState([]);

    const oakClick = _ => {
        setOak(o => [...o,{ 
            id: id.current++,
            treeName: 'Naujas ąžuolas'
        }]);
    }

    const birchClick = _ => {
        setBirch(b => [...b,{ 
            id: id.current++,
            treeName: 'Naujas beržas'
        }]);
    }

    const mapleClick = _ => {
        setMaple(m => [...m,{ 
            id: id.current++,
            treeName: 'Naujas uosis'
        }]);
    }


  return (
    <div className="App">
      <header className="App-header">
        <div className='big-sq'>
            <div className="smaller-sq">
                {
                    oak.map((o) =>
                    <div className='tree-divs' key={o.id}>{o.treeName}
                    </div>
                )
                }
            </div>

            <div className="smaller-sq">
            {
                    birch.map((b) =>
                    <div className='tree-divs' key={b.id}>{b.treeName}
                    </div>
                )
                }
            </div>

            <div className="smaller-sq">
            {
                    maple.map((m) =>
                    <div className='tree-divs' key={m.id}>{m.treeName}
                    </div>
                )
                }
            </div>

        </div>
        <div className="btn-container">
            <button className='btn' type='button' onClick={oakClick}>ąžuolas</button>
            <button className='btn' type='button' onClick={birchClick}>beržas</button>
            <button className='btn' type='button' onClick={mapleClick}>uosis</button>
        </div>
      </header>
    </div>
  );
}

export default App;