import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import ErrorPage from './pages/ErrorPage'
import LandingPage from './pages/LandingPage'
import MyNavbar from './components/MyNavbar'
import OnlyPrivate from './components/OnlyPrivate'
import 'bootstrap/dist/css/bootstrap.min.css';
import EventDetailsPage from './pages/EventDetailsPage';
import EditEventPage from './pages/EditEventPage';
import AddEventPage from './pages/AddEventPage';
import ConfirmationPage from './pages/ConfirmationPage';
import FavoritePage from './pages/FavoritePage';
import AllEventPage from './pages/AllEventPage';

function App() {
  

  return (
    <div id="main-app-repere">
      <MyNavbar/>

    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/homepage" element={<OnlyPrivate><HomePage/></OnlyPrivate>}/>
      <Route path="/event/new" element={<OnlyPrivate><AddEventPage/></OnlyPrivate>}/>
      <Route path="/event/:eventId" element={<OnlyPrivate><EventDetailsPage/></OnlyPrivate>}/>
      <Route path="/event/edit/:eventId" element={<OnlyPrivate><EditEventPage/></OnlyPrivate>}/>
      <Route path="/confirmation" element={<OnlyPrivate><ConfirmationPage /></OnlyPrivate>} />
      <Route path="/event/all" element={<OnlyPrivate><AllEventPage /></OnlyPrivate>} />
      <Route path="/favorite" element={<OnlyPrivate><FavoritePage /></OnlyPrivate>} />
      <Route path="/error" element={<ErrorPage/>}/>

    </Routes>
    </div>
  )
}

export default App
