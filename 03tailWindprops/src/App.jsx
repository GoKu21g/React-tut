import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  return(
    <>
     {/* <div className="bg-gray-400 h-screen flex justify-center items-center">
      <h1 className="bg-green-400 px-6 py-3 rounded-xl text-4xl">
        Tailwind test
      </h1>
    </div>*/}

    <Card username = 'Gourav' btnText = "Click Me" />
    <Card username = 'GodSpeed'  />

     
    </>
  );
}

export default App
