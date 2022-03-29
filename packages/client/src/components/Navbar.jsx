import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../stores/AuthContext'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  height: 34px;
  width: 100vw;
  background-color: #ccc;
  margin-top: 0px;
  padding: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`

const AppTitle = styled.h1`
  font-size: 20px;
  margin-top: 0px;
`

const NavbarButtonContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Navbar = () => {
  const { currentUser } = useAuth()

  return (
    <NavbarContainer>
      <AppTitle>Goatpad</AppTitle>
      {currentUser ? currentUser.email : 'Logged Out'}
      <NavbarButtonContainer>
        <Link to='/login'>
          <p>Login</p>
        </Link>
        <Link to='/signup'>
          <p>Signup</p>
        </Link>
        <Link to='/logout'>Logout</Link>
      </NavbarButtonContainer>
    </NavbarContainer>
  )
}

export default Navbar
