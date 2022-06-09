import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavbarContainer = styled.div`
  height: 8vh;
  width: 100vw;
  background-color: #c7c7f0;
  margin-top: 0px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 620px) {
    justify-content: center;
  }
`;

const AppTitle = styled.h1`
  font-size: 30px;
  margin-top: 0px;
  color: #fff;

  @media (max-width: 620px) {
    display: none;
  }
`;

const NavbarButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: #fff;
    font-size: 20px;
    border-bottom: 1px solid #fff;
    padding: 0 5px;
    margin: 0 2rem;
  }

  a:hover {
    color: rgba(30, 30, 100, 0.8);
    border-bottom: 5px solid #fff;
  }
`;

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <NavbarContainer>
      <Link to="/">
        <AppTitle>G o a t p a d</AppTitle>
      </Link>
      <NavbarButtonContainer>
        <Link to="/about">
          <p>About</p>
        </Link>
        {!user ? (
          <>
            <Link to="/signup">
              <p>Signup</p>
            </Link>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
            <Link to="/">
              <p onClick={logout}>Logout</p>
            </Link>
          </>
        )}
      </NavbarButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
