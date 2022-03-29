import React from 'react'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()

function Login() {
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
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <form onSubmit={handleLogin} className='loginForm'>
      <input type='email' name='email' placeholder='Email' />
      <input type='password' name='password' placeholder='Password' />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
