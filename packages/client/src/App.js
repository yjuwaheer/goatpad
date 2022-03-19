import React from 'react'
// import { Button } from '@goatpad/library'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './utils/firebase.ts'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function App() {
  async function handleLogin(event) {
    event.preventDefault();
    const { 
      email: {
        value:email
      },
      password: {
        value:password
      }
    } = event.target.elements;
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  async function addUser () {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className='App'>
      <h1>Goatpad</h1>
      <form onSubmit={handleLogin}>
        <input type='email' name="email" placeholder="Email" />
        <input type='password' name="password" placeholder="Password" />
        <button type='submit'>Login</button>
      </form>
      <button label='add user' onClick={addUser}>add user</button>
    </div>
  )
}

export default App
