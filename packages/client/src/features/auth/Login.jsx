import React, { useState } from 'react'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()
const initialState = {
  email: '',
  password: '',
}

function Login() {
  const [formData, setFormData] = useState(initialState)

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  async function handleLogin(event) {
    event.preventDefault()
    // const {
    //   email: { value: email },
    //   password: { value: password },
    // } = event.target.elements

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

    // Clearing inputs after successful signup
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleLogin} className='loginForm'>
      <input type='email' name='email' placeholder='Email' onChange={onChange} value={email} />
      <input type='password' name='password' placeholder='Password' onChange={onChange} value={password} />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
