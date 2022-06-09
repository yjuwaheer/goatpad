import React from "react";

import { useAuthContext } from "../hooks/useAuthContext";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  color: rgba(30, 30, 100, 0.8);
`;

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <ProfileContainer>
      <h1>Username: <Span>{user.displayName}</Span></h1>
      <h2>Email: <Span>{user.email}</Span></h2>
    </ProfileContainer>
  );
};

export default Profile;
