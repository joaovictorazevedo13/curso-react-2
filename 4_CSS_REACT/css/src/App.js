import './App.css';
import MyComponent from './Components/MyComponent';
import Title from './Components/Title';
import {useState} from 'react';


function App() {

  const n = 15;
  const [nome] = useState("João");


  return (
    <div className="App">
      <Title/>
      <h3>React com CSS</h3>
      <MyComponent/>
      <div className='Dinamico'>
        <h2 style={n < 10 ? ({background: "green"}) : ({background: "red"})}>CSS dinâmico</h2>
        <h2 style={n > 10 ? ({background: "green"}) : ({background: "red"})}>CSS dinâmico</h2>
        <h2 style={nome === "João" ? ({background: "aqua"}) : ({background: "purple"})}>CSS dinâmico</h2>
      </div>
      

    </div>
  );
}

export default App;
