import React from 'react'

import { useAuthContext } from '../../hooks/useAuthContext'

import PostList from './components/PostList'
import PostForm from './components/PostForm'

const Posts = () => {
  const { user } = useAuthContext()

  return (
    <div>
      {user && <PostForm />}
      <PostList />
    </div>
  )
}

export default Posts
