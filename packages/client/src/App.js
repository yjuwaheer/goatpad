import React from 'react'
import { Routes, Route } from 'react-router-dom'
// eslint-disable-next-line
import firebaseApp from './config/firebase.ts'

import { AuthProvider } from './stores/AuthContext'
import { PostsProvider } from './stores/PostsContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import Posts from './features/posts'

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/' element={<Posts />} /> */}
        </Routes>
        <Footer />
      </PostsProvider>
    </AuthProvider>
  )
}

export default App
