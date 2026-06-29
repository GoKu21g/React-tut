import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = function(){
    if(counter < 20){
      setCounter(counter +1);
    }
    
  }

  const remValue = function(){
    if(counter > 0){
      setCounter(counter -1);
    };
  }


  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remValue}>Remove Value</button>
    </>
  )
}

export default App