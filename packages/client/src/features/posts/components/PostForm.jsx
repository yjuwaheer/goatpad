import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { useAuth } from '../../../stores/AuthContext'

import { db } from '../../../config/firebase.ts'

const initialState = {
  title: '',
  post: '',
}

const PostForm = () => {
  const { currentUser } = useAuth()
  const [formData, setFormData] = useState(initialState)

  const { title, post } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    // TODO: submit data to firebase
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        ...formData,
        uid: currentUser.uid,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }

    setFormData(initialState)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='title' onChange={onChange} value={title} />
      <input type='text' name='post' onChange={onChange} value={post} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default PostForm
