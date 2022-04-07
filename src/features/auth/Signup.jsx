import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../stores/AuthContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema } from './formSchema'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      password2: '',
    },
    resolver: yupResolver(signUpSchema),
  })

  const navigate = useNavigate()
  const { signup } = useAuth()

  async function handleSignUp({ username, email, password, password2 }) {
    try {
      await signup(email, password)
      console.log(username, email, password, password2)
    } catch (error) {
      console.error('Failed to create an account')
    }

    navigate('/')
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit((data) => {
          handleSignUp(data)
        })}
        className='signUpForm'
      >
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input name='username' type='text' {...register('username')} placeholder='Username' />
          <p>{errors.username?.message}</p>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' {...register('email')} placeholder='Email' />
          <p>{errors.email?.message}</p>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password' {...register('password')} placeholder='Password' />
          <p>{errors.password?.message}</p>
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input name='password2' type='password' {...register('password2')} placeholder='Confirm Password' />
          <p>{errors.password2?.message}</p>
        </div>
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
