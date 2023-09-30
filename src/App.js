import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Slider from './Pages/Slider'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/slider' element={<Slider/>}/>
      </Routes>
    </div>
  )
}

export default App