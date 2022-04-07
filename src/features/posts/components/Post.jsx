import React from 'react'
import styled from 'styled-components'

const PostCard = styled.div`
  border: 1px solid orange;
  border-radius: 5px;
  margin-bottom: 6px;
  padding: 3px;
`

const Topics = styled.div`
  background-color: #999;
  padding: 6px;
  display: flex;
`

const Topic = styled.div`
  background-color: #333;
  color: #ccc;
  padding: 3px;
  margin-right: 3px;
`

const Post = ({ postData }) => {
  const { title, topics, postBody } = postData

  return (
    <PostCard>
      {topics ? (
        <Topics>
          {topics.map((topic) => (
            <Topic key={topic}>{topic}</Topic>
          ))}
        </Topics>
      ) : null}
      <h3>{title}</h3>
      <p>{postBody}</p>
    </PostCard>
  )
}

export default Post
