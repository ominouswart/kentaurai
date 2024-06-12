import { useState } from 'react';
import './App.css';
import './buttons.scss';



function App() {

    const [color, setColor] = useState('orange');
    const [fontSize, setFontSize] = useState('15px');
    const [fontFamily, setFontFamily] = useState('monospace');
    const [text, setText] = useState('');

    const colors = [
        'crimson',
        'cyan',
        'yellow',
        'orange',
        'green'
    ]

    const fontSizes = [
        '15px',
        '20px',
        '30px',
        '40px',
        '60px'
    ]

    const fontFamilies = [
        'monospace',
        'Times New Roman',
        'Arial',
        'Courier New',
        'Gill Sans'
    ]

    const handleP = e => {
        setText(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                <fieldset>
                    <legend>COLORS</legend>
                    <select value={color} onChange={e => setColor(e.target.value)}>
                        {
                            colors.map(c => <option key={c} value={c}>{c}</option>)
                        }
                    </select>
                </fieldset>
                <fieldset>
                    <legend>FONT SIZE</legend>
                    <select value={fontSize} onChange={e => setFontSize(e.target.value)}>
                        {
                            fontSizes.map(fs => <option key={fs} value={fs}>{fs}</option>)
                        }
                    </select>
                </fieldset>
                <fieldset style={{marginBottom: '30px'}}>
                    <legend>FONT FAMILY</legend>
                    <select value={fontFamily} onChange={e => setFontFamily(e.target.value)}>
                        {
                            fontFamilies.map(ff => <option key={ff} value={ff}>{ff}</option>)
                        }
                    </select>
                </fieldset>
                </div>
                <div style={{display: 'flex'}}>
                    <input type="text" value={text} onChange={handleP}/>
                </div>
                <div>
                    <p style={{color: color, fontSize: fontSize, fontFamily: fontFamily}}>{text}</p>
                </div>
                
            </header>
        </div>
    );
}

export default App;