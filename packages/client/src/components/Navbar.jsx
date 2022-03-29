import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      console.error(error)
    }
    navigate('/')
  }

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
        <p onClick={handleLogout}>Logout</p>
      </NavbarButtonContainer>
    </NavbarContainer>
  )
}

export default Navbar
