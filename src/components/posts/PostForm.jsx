import React from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { postFormSchema } from '../../schemas/postFormSchema'
import styled from 'styled-components'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../config/firebase.ts'
import { useAuthContext } from '../../hooks/useAuthContext'

// Styled components
const CreatePostContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: #fafafa;
  padding: 1rem;
  border-radius: 5px;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`

const Input = styled.input`
  padding: 0 0.5rem;
  border-radius: 5px;
  border: 3px solid rgba(30, 30, 100, 0.3);

  &:focus {
    outline: none;
    border: 3px solid rgba(30, 30, 100, 0.8);
  }
`

const Textarea = styled.textarea`
  resize: vertical;
  height: 100px;
  padding: 0 0.5rem;
  border-radius: 5px;
  border: 3px solid rgba(30, 30, 100, 0.3);

  &:focus {
    outline: none;
    border: 3px solid rgba(30, 30, 100, 0.8);
  }
`

const Error = styled.p`
  color: rgba(207, 40, 40, 1);
`

const Button = styled.button`
  width: 200px;
  align-self: center;
  padding: 0.2rem;
  background-color: rgba(30, 30, 100, 0.5);
  border-radius: 5px;
  border: 3px solid rgba(30, 30, 100, 0.3);
  color: white;

  &:hover {
    cursor: pointer;
    background-color: rgba(30, 30, 100, 0.7);
  }
`

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Label htmlFor='title'>Title</Label>
          <Input type='text' name='title' {...register('title')} placeholder='Enter a title' />
          <Error>{errors.title?.message}</Error>
        </Stack>
        <Stack>
          <Label htmlFor='title'>Topics</Label>
          <Input type='text' name='topics' {...register('topics')} placeholder='Enter topics separated by commas' />
          <Error>{errors.title?.message}</Error>
        </Stack>
        <Stack>
          <Label htmlFor='postBody'>Body</Label>
          <Textarea name='postBody' {...register('postBody')} placeholder='Enter your post' rows='6' />
          <Error>{errors.postBody?.message}</Error>
        </Stack>
        <Button type='submit'>Create Post</Button>
      </Form>
    </CreatePostContainer>
  )
}

export default PostForm