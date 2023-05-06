import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default UserCard;
