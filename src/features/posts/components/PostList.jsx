import React from 'react'

import { usePosts } from '../../../stores/PostsContext'

import { Stack } from '../../../components/styles/Stack.styled'

import Post from './Post'

const PostList = () => {
  const { posts } = usePosts()

  return (
    <Stack gutter='lg'>
      <h2>PostList</h2>
      {posts && posts.map((post) => <Post postData={post} key={post.id} />)}
    </Stack>
  )
}

export default PostList
