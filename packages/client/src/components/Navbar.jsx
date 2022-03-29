import React from 'react'
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
  return (
    <NavbarContainer>
      <AppTitle>Goatpad</AppTitle>
      <NavbarButtonContainer>
        <p>Login</p>
        <p>Signup</p>
      </NavbarButtonContainer>
    </NavbarContainer>
  )
}

export default Navbar
