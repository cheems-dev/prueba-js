import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import LevelMenu from './components/LevelMenu/LevelMenu'
function App() {
  const LevelData = [
    { name: 'Garden 01', category:'red', color: '#f8464d' },
    { name: 'Garden 02', category:'blue', color: '#00a7f1' },
    { name: 'Garden 03', category:'green', color: '#03d37b' },
    { name: 'Garden 04', category:'red', color: '#f8464d' },
    { name: 'Garden 05', category:'yellow', color: '#fba609' },
    { name: 'Garden 06', category:'green', color: '#03d37b' },
    { name: 'Garden 07', category:'blue', color: '#00a7f1' },
    { name: 'Garden 08', category:'yellow', color: '#fba609' },
    { name: 'Garden 09', category:'red', color: '#f8464d' },
    { name: 'Garden 10', category:'blue', color: '#00a7f1' },
    { name: 'Garden 11', category:'red', color: '#f8464d' },
    { name: 'Garden 12', category:'blue', color: '#00a7f1' },
    { name: 'Garden 13', category:'green', color: '#03d37b' },
    { name: 'Garden 14', category:'red', color: '#f8464d' },
    { name: 'Garden 15', category:'yellow', color: '#fba609' },
    { name: 'Garden 16', category:'green', color: '#03d37b' },
    { name: 'Garden 17', category:'blue', color: '#00a7f1' },
    { name: 'Garden 18', category:'yellow', color: '#fba609' },
    { name: 'Garden 19', category:'red', color: '#f8464d' },
    { name: 'Garden 20', category:'blue', color: '#00a7f1' },
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
