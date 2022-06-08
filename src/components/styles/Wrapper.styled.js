// import React from 'react'
import styled from 'styled-components'

// Global container that wraps the whole app
export const GlobalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  font-family: 'Poppins', sans-serif;
  padding: none;
  margin: none;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: black;
  }
`

// Create Post Container
export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 50vw;
    background-color: #fafafa;
    padding: 1rem;
    border-radius: 5px;

    label {
      font-size: 1.2rem;
      font-weight: bold;
    }

    input {
      padding: 0 0.5rem;
      border-radius: 5px;
      border: 3px solid rgba(30, 30, 100, 0.3);

      &:focus {
        outline: none;
        border: 3px solid rgba(30, 30, 100, 0.8);
      }
    }

    textarea {
      resize: vertical;
      height: 100px;
      padding: 0 0.5rem;
      border-radius: 5px;
      border: 3px solid rgba(30, 30, 100, 0.3);

      &:focus {
        outline: none;
        border: 3px solid rgba(30, 30, 100, 0.8);
      }
    }

    p {
      color: rgba(207, 40, 40, 1);
    }

    button {
      width: 200px;
      justify-self: center;
      padding: 0.2rem;
      background-color: rgba(30, 30, 100, 0.5);
      border-radius: 5px;
      border: 3px solid rgba(30, 30, 100, 0.3);
      color: white;

      &:hover {
        cursor: pointer;
        background-color: rgba(30, 30, 100, 0.7);
      }
    }

    @media (max-width: 1000px) {
      width: 90vw;
    }
  }

`

