import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../config/firebase.ts'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)

      if (!res) {
        throw new Error('Could not login')
      }

      dispatch({ type: 'LOGIN', payload: res.user })

      setIsPending(false)
      setError(null)
    } catch (err) {
      setIsPending(false)
      setError(err.message)
    }
  }

  return { error, isPending, login }
}
