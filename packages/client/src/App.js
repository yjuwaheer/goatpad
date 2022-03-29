import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// eslint-disable-next-line
import firebaseApp from './config/firebase.ts'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Login from './features/auth/Login'
import Signup from './features/auth/Signup'

import Posts from './features/posts'

function App() {
  // async function addUser() {
  //   try {
  //     const docRef = await addDoc(collection(db, 'users'), {
  //       first: 'Ada',
  //       last: 'Lovelace',
  //       born: 1815,
  //     })
  //     console.log('Document written with ID: ', docRef.id)
  //   } catch (e) {
  //     console.error('Error adding document: ', e)
  //   }
  // }

  return (
    <>
      <Navbar />

      <div className='App'>
        <Signup />
        <Login />
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<Posts />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
