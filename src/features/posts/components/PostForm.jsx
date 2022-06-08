import React from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { postFormSchema } from './postFormSchema'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../config/firebase.ts'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { Stack } from '../../../components/styles/Stack.styled'
import { CreatePostContainer } from '../../../components/styles/Wrapper.styled'

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      postBody: '',
      topics: [],
    },
    resolver: yupResolver(postFormSchema),
  })

  const { user } = useAuthContext()
  const navigate = useNavigate()

  const onSubmit = async (data, e) => {
    try {
      const newTopics = data.topics.split(',').map((topic) => topic.trim())
      const allTopics = [user.displayName || user.email, ...newTopics]
      const docRef = await addDoc(collection(db, 'posts'), {
        ...data,
        topics: [...allTopics],
        uid: user.uid,
        timestamp: serverTimestamp(),
      })
      console.log('Document written with ID: ', docRef.id)
      e.target.reset()
    } catch (err) {
      console.error('Error adding document: ', err)
    }

    navigate('/')
  }

  return (
    <CreatePostContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gutter='lg'>
          <Stack gutter='sm'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' {...register('title')} placeholder='Enter a title' />
            <p>{errors.title?.message}</p>
          </Stack>
          <Stack gutter='sm'>
            <label htmlFor='title'>Topics</label>
            <input type='text' name='topics' {...register('topics')} placeholder='Enter topics separated by commas' />
            <p>{errors.title?.message}</p>
          </Stack>
          <Stack gutter='sm'>
            <label htmlFor='postBody'>Body</label>
            <textarea name='postBody' {...register('postBody')} placeholder='Enter your post' rows='6' />
            <p>{errors.postBody?.message}</p>
          </Stack>
          <button type='submit'>Create Post</button>
        </Stack>
      </form>
    </CreatePostContainer>
  )
}

export default PostForm
