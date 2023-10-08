import React from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Slider from './Pages/Slider'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Gallery from './Pages/Gallery'
import Blogs from './Pages/Blogs'
import Page from './Pages/Page'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/slider' element={<Slider/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path="/galleries" element={<Gallery/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/pages' element={<Page/>}/>
      </Routes>
    </div>
  )
}

export default App