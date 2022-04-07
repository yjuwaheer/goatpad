import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../stores/AuthContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from './formSchema'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  })

  const navigate = useNavigate()
  const { login } = useAuth()

  async function handleLogin({ email, password }) {
    try {
      await login(email, password)
    } catch (error) {
      console.error(error)
    }

    navigate('/')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          handleLogin(data)
        })}
        className='loginForm'
      >
        <div className='form-group'>
          <input type='email' name='email' {...register('email')} placeholder='Email' />
          <p>{errors.email?.message}</p>
        </div>
        <div className='form-group'>
          <input type='password' name='password' {...register('password')} placeholder='Password' />
          <p>{errors.password?.message}</p>
        </div>
        <div className='form-group'>
          <button type='submit'>Login</button>
        </div>
      </form>
      <div>
        <p>Don&apos;t have an account yet?</p>
        <Link to='/signup'>Sign Up!</Link>
      </div>
    </>
  )
}

export default Login
