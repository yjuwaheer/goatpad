import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../stores/AuthContext'

const initialState = {
  email: '',
  password: '',
}

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [formData, setFormData] = useState(initialState)
  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  async function handleLogin(event) {
    event.preventDefault()

    /* TODO: add validation */

    try {
      await login(email, password)
    } catch (error) {
      console.error(error)
    }

    // Clearing inputs after successful signup
    setFormData(initialState)

    navigate('/')
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
