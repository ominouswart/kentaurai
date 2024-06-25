import './App.css';
import './buttons.scss';
import Button1 from './Components/014/Button1';
import Button2 from './Components/014/Button2';
import Counter from './Components/014/Counter';
import Buttons from './Components/014/Buttons';
import './Components/ws/figures.scss';
import Figure from './Components/014/Figure';


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>CONTEXT II</h1>

                <div className="buttons">
                    <Counter>
                        <Button1 />
                        <Buttons.Blue />
                        <Buttons.Yellow />
                    </Counter>

                    <Counter>
                        <Button2 />
                    </Counter>
                </div>
                <Figure color='crimson'>
                    <div className="square"></div>
                </Figure>

                <Figure color='skyblue'>
                    <div className="circle"></div>
                </Figure>


            </header>
        </div>
    );
}

export default App;