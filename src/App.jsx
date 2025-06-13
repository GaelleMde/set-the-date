import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import ErrorPage from './pages/ErrorPage'
import LandingPage from './pages/LandingPage'
import MyNavbar from './components/MyNavbar'
import OnlyPrivate from './components/OnlyPrivate'

function App() {
  

  return (
    <div>
      <MyNavbar/>

    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/homepage" element={<OnlyPrivate><HomePage/></OnlyPrivate>}/>
      <Route path="/error" element={<ErrorPage/>}/>

    </Routes>
    </div>
  )
}

export default App
