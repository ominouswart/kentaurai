import './App.css';
import useAdder from './Components/015/useAdder';
import './buttons.scss';

function App() {

    const [adderCount, addOne, addTen] = useAdder(-5);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Hooks {adderCount}</h1>
        <div className="buttons">
            <button type='button' className='blue' onClick={addOne}>Add 1</button>
            <button type='button' className='red' onClick={addTen}>Add 10</button>
        </div>
      </header>
    </div>
  );
}

export default App;