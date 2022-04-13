import { useState } from 'react'

import { auth } from '../config/firebase.ts'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const [error, setError] = useState(null)

  const login = (email, password) => {
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('logged in')
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return { error, login }
}
