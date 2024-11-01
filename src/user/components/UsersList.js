import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  //if there are no users in the array
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found!!</h2>
      </div>
    );
  }

  //if there are users in the array
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          placeCount={user.places}
          image={user.image}
        />
      ))}
    </ul>
  );
};

export default UsersList;
