import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../stores/AuthContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  password2: yup.string().required(),
})

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
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()
  // const { signup } = useAuth()

  async function handleSignUp({ username, email, password, password2 }) {
    try {
      // await signup(email, password)
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
        <input
          type='text'
          {...register('username', {
            required: 'Required',
            minLength: 4,
          })}
          placeholder='Username'
        />
        <p>{errors.username?.message}</p>
        <input
          type='email'
          {...register('email', {
            required: 'Required',
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          placeholder='Email'
        />
        <p>{errors.email?.message}</p>
        <input
          type='password'
          {...register('password', {
            required: 'Required',
            minLength: {
              value: 8,
              message: 'Min length is 8',
            },
          })}
          placeholder='password'
        />
        <p>{errors.password?.message}</p>
        <input
          type='password'
          {...register('password2', {
            required: 'Required',
            minLength: {
              value: 8,
              message: 'Min length is 8',
            },
          })}
          placeholder='password2'
        />
        <p>{errors.password?.message}</p>
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
