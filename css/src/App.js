import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from 'react'

function App() {

  const n =15
  const [name] = useState("Gabriel")

  const redTitle = true;

  return (
    <div className="App">

    <h1>React com CSS</h1>
    <MyComponent/>
    <p>Este paragrafo é doAPP.js</p>
    {/*Inline CSS*/}
  <p style={{color: "blue", padding: "25px", boderTop: "2px solid red"}}>
    Este elemento foi estilizado de forma inline
  </p>
  <p style={{color: "magenta", padding: "25px", boderTop: "2px solid red"}}>
    Este elemento foi estilizado de forma inline
  </p>
  {/*CSS Inline dinamico*/}
  <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinamico</h2>

  <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinamico</h2>

  <h2 style={name === "Gabriel" ? ({color: "white", backgroundColor:"#000"}) : null}>Teste nome</h2>

    {/*Classe dinamica*/}
    <h2 className={redTitle ? "red-title" : "title"}>
      Este titulo vai ter classe dinamica</h2>

      {/*CSS Modules*/}
         <Title/>
         <h2 className="my_title">Testando</h2>
    </div>
  );
}

export default App;
