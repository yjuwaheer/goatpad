import React from 'react'
// import { Button } from '@goatpad/library'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './utils/firebase.ts'

function App() {
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
      <button label='add user' onClick={addUser}>add user</button>
    </div>
  )
}

export default App
