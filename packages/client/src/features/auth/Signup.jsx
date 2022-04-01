import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../stores/AuthContext'

const initialState = {
  email: '',
  password: '',
}

function Signup() {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [formData, setFormData] = useState(initialState)

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  async function handleSignUp(event) {
    event.preventDefault()

    /* TODO: Add validation here */

    try {
      await signup(email, password)
    } catch (error) {
      console.error('Failed to create an account')
    }

    // Clearing inputs after successful signup
    setFormData(initialState)

    navigate('/')
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className='signUpForm'>
        <input type='email' name='email' placeholder='Email' onChange={onChange} value={email} />
        <input type='password' name='password' placeholder='Password' onChange={onChange} value={password} />
        <button type='submit'>register</button>
      </form>
      <div>
        <p>Already have an account?</p>
        <Link to='/login'>Login!</Link>
      </div>
    </>
  )
}

export default Signup
