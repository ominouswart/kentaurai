import './App.css';
import './Components/nd3/dogs.scss';



function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    const lwC = (w) => w[0] === w[0].toLowerCase();

    const filter = dogs.filter(lwC);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Dogs</h2>
        <div className='mrg'>
            {
                dogs.map((d, i) => 
                <div className='dog-sq' key={i}>{d}</div>
            )
            }
            </div>
            <div className='mrg'>
            {
                dogs
                .sort((a, b) => a.length - b.length)
                .map((d, i) => 
                <div className='dog-ci' key={i}>{d} {i}</div>
            )
            }
            </div>
            <div className='mrg'>
            {
                dogs.map((d, i) => i % 2 
                ?
                <div className='dog-ci' key={i}>{d}</div>
                :
                <div className='dog-sq' key={i}>{d}</div>)
            }
            </div>
            <div className='mrg'>
                {
                    filter.map((d, i) => 
                        <div className='dog-sq' key={i}>{d}</div>
                    )
                }
            </div>
            <div className='mrg'>
                {
                    dogs.map((d, i) => d.length > 6
                    ?
                    <div className='dog-gr' key={i}>{d} <br />Ilgis: {d.length}</div>
                    :
                    <div className='dog-re' key={i}>{d} <br /> Ilgis: {d.length}</div>
                )
                }
            </div>
        
      </header>
    </div>
  );
}

export default App;