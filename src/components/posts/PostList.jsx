import React from 'react'
import { useCollection } from '../../hooks/useCollection'

import styled from 'styled-components';

import Post from './Post'

// Styled components
const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
`

const PostHeading = styled.h2`
  margin-bottom: 10px;
`

const PostList = () => {
  const { documents } = useCollection('posts', null, ['timestamp', 'desc'])

  return (
    <PostListContainer>
        <PostHeading>Posts List</PostHeading>
        {documents && documents.map((post) => <Post postData={post} key={post.id} />)}
    </PostListContainer>
  )
}

export default PostList
