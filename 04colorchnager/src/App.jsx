import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState("bg-black")

  return (
    <>

      <div className= {`h-screen flex justify-center items-end pb-8 ${bgColor} ` }>

        <div className=' bg-white/20 backdrop-blur-xl h-20 max-w-7xl w-full rounded-2xl border border-white/40 shadow-xl flex items-center justify-evenly'>

          <button onClick={() => setbgColor("bg-red-500")} className='bg-red-500 px-8 py-4 rounded-xl'></button>
          <button onClick={() => setbgColor("bg-lime-500")} className='bg-lime-500 px-8 py-4 rounded-xl'></button>
          <button onClick={() => setbgColor("bg-blue-500")} className='bg-blue-500 px-8 py-4 rounded-xl'></button>
          <button onClick={() => setbgColor("bg-purple-500")} className='bg-purple-500 px-8 py-4 rounded-xl'></button>
          <button onClick={() => setbgColor("bg-gray-500")} className='bg-gray-500 px-8 py-4 rounded-xl'></button>
          <button onClick={() => setbgColor("bg-yellow-500")} className='bg-yellow-500 px-8 py-4 rounded-xl'></button>
          <button onClick={() => setbgColor("bg-stone-700")} className="bg-stone-700 px-8 py-4 rounded-xl"></button>          
          <button onClick={() => setbgColor("bg-violet-300")} className='bg-violet-300 px-8 py-4 rounded-xl'></button>
          <button onClick={() => setbgColor("bg-black")} className='bg-black px-8 py-4 rounded-xl'></button>

        </div>



      </div>

      
    </>
  )
}

export default App
