import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../config/firebase.ts'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      if (!res) {
        throw new Error('Could not create user')
      }

      await updateProfile(res.user, { displayName })

      dispatch({ type: 'LOGIN', payload: res.user })

      setIsPending(false)
      setError(null)
    } catch (err) {
      setIsPending(false)
      setError(err.message)
    }
  }

  return { error, isPending, signup }
}
