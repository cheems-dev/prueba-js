import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import LevelMenu from './components/LevelMenu/LevelMenu'
import BackIcon from './assets/images/back.png'


import garden01 from './assets/images/garden01.jpg'
import garden02 from './assets/images/garden02.jpg'
import garden03 from './assets/images/garden05.jpg'
import garden04 from './assets/images/garden04.jpg'
import IconButton from './components/buttons/Icon/IconButton'
function App() {
  const LevelData = [
    { name: 'Garden 01', category:'red', color: '#f8464d', backgroundSrc: garden01},
    { name: 'Garden 02', category:'blue', color: '#00a7f1', backgroundSrc: garden02},
    { name: 'Garden 03', category:'green', color: '#03d37b', backgroundSrc: garden03},
    { name: 'Garden 04', category:'red', color: '#f8464d', backgroundSrc: garden02},
    { name: 'Garden 05', category:'yellow', color: '#fba609', backgroundSrc: garden01},
    { name: 'Garden 06', category:'green', color: '#03d37b', backgroundSrc: garden01},
    { name: 'Garden 07', category:'blue', color: '#00a7f1', backgroundSrc: garden01},
    { name: 'Garden 08', category:'yellow', color: '#fba609', backgroundSrc: garden02},
    { name: 'Garden 09', category:'red', color: '#f8464d', backgroundSrc: garden03},
    { name: 'Garden 10', category:'blue', color: '#00a7f1', backgroundSrc: garden01},
    { name: 'Garden 11', category:'red', color: '#f8464d', backgroundSrc: garden01},
    { name: 'Garden 12', category:'blue', color: '#00a7f1', backgroundSrc: garden02},
    { name: 'Garden 13', category:'green', color: '#03d37b', backgroundSrc: garden03},
    { name: 'Garden 14', category:'red', color: '#f8464d', backgroundSrc: garden01},
    { name: 'Garden 15', category:'yellow', color: '#fba609', backgroundSrc: garden03},
    { name: 'Garden 16', category:'green', color: '#03d37b', backgroundSrc: garden01},
    { name: 'Garden 17', category:'blue', color: '#00a7f1', backgroundSrc: garden02},
    { name: 'Garden 18', category:'yellow', color: '#fba609', backgroundSrc: garden03},
    { name: 'Garden 19', category:'red', color: '#f8464d', backgroundSrc: garden03},
    { name: 'Garden 20', category:'blue', color: '#00a7f1', backgroundSrc: garden01},
  ];

  return (
    <>
      <Navbar />
      <div>
        <IconButton imageSrc={BackIcon} />
        <LevelMenu
          location = "GREENHOUSE"
          data= {LevelData}
        />
      </div>
    </>
  )
}

export default App
