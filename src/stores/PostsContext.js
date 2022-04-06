import React, { createContext, useContext, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '../config/firebase.ts'
import { useEffect } from 'react'

const PostsContext = createContext()

export function usePosts() {
  return useContext(PostsContext)
}

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([])

  // This sets the 'posts' as the document we're dealing with
  const colRef = collection(db, 'posts')

  useEffect(() => {
    getPosts()
  }, [])

  function getPosts() {
    getDocs(colRef).then((res) => {
      const postListData = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))

      setPosts(postListData)
    })

    return posts
  }

  const value = {
    posts,
    getPosts,
  }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
