import './App.css';
import Base from './Components/nd2/Base';


function App() {

    const text1 = 'Bebrai';
    const text2 = '& Zebrai';
    const color = 'crimson';

  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT BASE</h1>  
        <Base text1={text1} text2={text2} color={color}/>
      </header>
    </div>
  );
}

export default App;