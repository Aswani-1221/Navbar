import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './components/Contacts/Contacts'
import AboutUs from './components/AboutUs/AboutUs'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'


function App() {


  // console.log(isAuthenticated)
  return (
    <BrowserRouter>
      {
         (
          <div className='app'>
            <Header />
            <div className='app_body'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contacts' element={<Contacts/>} />
              </Routes>
            </div>
            {/* 
      
        <div className='app_body'>
          <AboutUs />
        </div>

        <Login /> */}

          </div>
        ) 
      }

    </BrowserRouter>
  )
}

export default App