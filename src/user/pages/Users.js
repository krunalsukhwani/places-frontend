import React from "react";

import UsersList from "../components/UsersList";
import "./Users.css";

const Users = () => {
  const USERS = [
    {
      id: "user1",
      name: "Edwin",
      places: 2,
      image:
        "https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg",
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
