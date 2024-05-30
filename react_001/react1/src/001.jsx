import './App.css';
import Bebras from './Components/001/Bebras';

const ten = _ => {
  return 2 * 11;
}

function App() {

  const T2 = 10 * 22;

  const el1 = 
  <>
      <h3>valio {3 * 7} kartus</h3>
      <span>!</span>
  </>;

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={
          {
            color: 'skyblue',
            letterSpacing: '15px'
          }
        }>Hello, Little REACT</h1>
        
        {ten()}
        <span>{3 * 9}</span>
        {T2}
        {el1}
        {el1}

        <Bebras/>
      </header>
    </div>
  );
}

export default App;
