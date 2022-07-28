import './App.css';
import Keyboard from './Keyboard.js';
import Result from './Result.js';
import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('');
  const onChangeHandler = (text) => {
    console.log(text);
    if (text === 'Borrar') {
      //setTexto('');
      let newText = texto.slice(0, -1);
      setTexto(newText);
    } else{
    let newText = texto + text;
    setTexto(newText);
  }
  }
  return (
    <div className="App">
      <Result text = {texto}/>
      <br/>
      <Keyboard changeHandler = {onChangeHandler} />
    </div>
  );
}

export default App;
