import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config/firebase.ts'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Posts from './features/posts'

const auth = getAuth()

function App() {
  async function handleLogin(event) {
    event.preventDefault()
    const {
      email: { value: email },
      password: { value: password },
    } = event.target.elements

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  async function addUser() {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <>
      <Navbar />
      <div className='App'>
        <form onSubmit={handleLogin}>
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <button type='submit'>Login</button>
        </form>
        <button label='add user' onClick={addUser}>
          add user
        </button>
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
