import React, { useState } from 'react'

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    post: '',
  })

  const { title, post } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  return (
    <form>
      <input type='text' name='title' onChange={onChange} value={title} />
      <input type='text' name='post' onChange={onChange} value={post} />
    </form>
  )
}

export default PostForm
