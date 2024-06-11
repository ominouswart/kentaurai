import { useEffect, useRef, useState } from 'react';
import './App.css';
import './buttons.scss';



function App() {

    const [count2, setCount2] = useState(0);

    const [count1, setCount1] = useState(0);

    const greenLoaded = useRef(false);

    // console.log('OUTSIDE USE EFFECT');

    useEffect(_ => {
        if (!greenLoaded.current) {
            greenLoaded.current = true;
            return;
        }
        console.log('refresh by green!', count1);
    }, [count1]);

    useEffect(_ => {
        console.log('refresh by yellow!');
    }, [count2] );

    useEffect(_ => {
        console.log('refresh by yellow or green');
    }, [count1, count2]);

    const clickGreen = _ => {
        setCount1(c => c + 1);

    }

    const clickYellow = _ => {
        setCount2(c => c + 1);
        
    }

    
 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use effect</h1>
        <div className="buttons">
                <button type='button' className='green' onClick={clickGreen}>{count1}</button>
                <button type='button' className='yellow' onClick={clickYellow}>{count2}</button>
            </div>
      </header>
    </div>
  );
}

export default App;