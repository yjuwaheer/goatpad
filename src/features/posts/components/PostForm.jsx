import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { useAuth } from '../../../stores/AuthContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { db } from '../../../config/firebase.ts'
import { postFormSchema } from './postFormSchema'

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      postBody: '',
    },
    resolver: yupResolver(postFormSchema),
  })

  const { currentUser } = useAuth()

  const onSubmit = async (data) => {
    // TODO: submit data to firebase
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        ...data,
        topics: [currentUser.uid],
        uid: currentUser.uid,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className='form-group'>
        <input type='text' name='title' {...register('title')} placeholder='Enter a title' />
        <p>{errors.title?.message}</p>
      </div>
      <div className='form-group'>
        <input type='text' name='postBody' {...register('postBody')} placeholder='Enter your post' />
        <p>{errors.postBody?.message}</p>
      </div>
      <div className='form-group'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default PostForm
