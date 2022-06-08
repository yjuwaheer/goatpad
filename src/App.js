import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Posts from './pages/Posts';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';

// Import styles components
import styled from 'styled-components'

// Global container that wraps the whole app
export const GlobalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  font-family: 'Poppins', sans-serif;
  padding: none;
  margin: none;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: black;
  }
`

function App() {
  return (
    <GlobalContainer>
      <Navbar />

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </GlobalContainer>
  )
}

export default App
