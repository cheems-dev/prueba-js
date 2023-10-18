import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import LevelMenu from './components/LevelMenu/LevelMenu'
function App() {
  const [count, setCount] = useState(0)

  const LevelData = [
    { name: 'Elemento 1', color: 'Rojo' },
    { name: 'Elemento 2', color: 'Azul' },
    { name: 'Elemento 3', color: 'Verde' },
  ];

  return (
    <>
      <Navbar />
      <LevelMenu
        location = "GREENHOUSE"
        data= {LevelData}
      />
    </>
  )
}

export default App
