import React, { useEffect, createContext, useState, useContext } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase.ts'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
