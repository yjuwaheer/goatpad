import { useState } from 'react'
import { auth } from '../config/firebase.ts'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const useSignup = () => {
  const [error, setError] = useState(null)

  const signup = (email, password, displayName) => {
    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, { displayName })
      })
      .catch((err) => {
        setError(err.message)
      })
  }
  return { error, signup }
}
