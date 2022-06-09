import React from "react";

import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>{user.displayName}</h1>
      <h2>{user.email}</h2>
    </div>
  );
};

export default Profile;
