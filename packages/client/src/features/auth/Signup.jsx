import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()
const initialState = {
  email: '',
  password: '',
}

function Signup() {
  const [formData, setFormData] = useState(initialState)

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  async function handleSignUp(event) {
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
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
    <form onSubmit={handleSignUp} className='signUpForm'>
      <input type='email' name='email' placeholder='Email' onChange={onChange} value={email} />
      <input type='password' name='password' placeholder='Password' onChange={onChange} value={password} />
      <button type='submit'>register</button>
    </form>
  )
}

export default Signup
