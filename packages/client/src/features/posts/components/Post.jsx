import React from 'react'
import styled from 'styled-components'

const PostCard = styled.div`
  border: 1px solid orange;
  border-radius: 5px;
  margin-bottom: 6px;
  padding: 3px;
`

const Post = () => {
  return (
    <PostCard>
      <h3>Post Title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum harum repudiandae? Cupiditate
        maiores non animi accusamus saepe vitae incidunt! Neque, eligendi ipsam! Dolores, tempore facere nam expedita
        nesciunt reprehenderit!
      </p>
    </PostCard>
  )
}

export default Post
