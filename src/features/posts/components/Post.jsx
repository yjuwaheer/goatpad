import React from 'react'

import { Stack } from '../../../components/styles/Stack.styled'
import { Tag } from './styles/Tag.styled'
import { TopicBar } from './styles/TopicBar.styled'

const Post = ({ postData }) => {
  const { title, topics, post, postBody } = postData

  return (
    <Stack gutter='xs'>
      {topics ? (
        <TopicBar>
          {topics.map((topic) => (
            <Tag key={topic}>{topic}</Tag>
          ))}
        </TopicBar>
      ) : null}
      <h3>{title}</h3>
      <p>{post || postBody}</p>
    </Stack>
  )
}

export default Post
