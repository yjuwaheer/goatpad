import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <NavLink
          className={(navData) =>
            navData.isActive ? "navLinkActive" : "navLink"
          }
          to="/about"
        >
          <p>About</p>
        </NavLink>
        {!user ? (
          <>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navLinkActive" : "navLink"
              }
              to="/signup"
            >
              <p>Signup</p>
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navLinkActive" : "navLink"
              }
              to="/login"
            >
              <p>Login</p>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navLinkActive" : "navLink"
              }
              to="/profile"
            >
              <p>Profile</p>
            </NavLink>
            <Link className="navLink" to="/">
              <p onClick={logout}>Logout</p>
            </Link>
          </>
        )}
      </NavbarButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
