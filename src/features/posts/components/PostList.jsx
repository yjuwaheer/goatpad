import React from 'react'

import { usePosts } from '../../../stores/PostsContext'

import Post from './Post'

const PostList = () => {
  const { posts } = usePosts()

  return (
    <div>
      <h2>PostList</h2>
      {posts && posts.map((post) => <Post postData={post} key={post.id} />)}
    </div>
  )
}

export default PostList
