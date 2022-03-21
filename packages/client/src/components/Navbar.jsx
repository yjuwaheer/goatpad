import React from 'react'
import styled from 'styled-components'

import Signin from '../features/auth/Signin'
import Signup from '../features/auth/Signup'

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
  height: 30px;
  margin-top: 0px;
`

const NavbarButtonContainer = styled.div`
  display: flex;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <AppTitle>Goatpad</AppTitle>
      <NavbarButtonContainer>
        <Signin />
        <Signup />
      </NavbarButtonContainer>
    </NavbarContainer>
  )
}

export default Navbar
