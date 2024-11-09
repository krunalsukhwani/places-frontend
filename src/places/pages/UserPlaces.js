import React from "react";
import { useParams } from "react-router-dom";

import "./UserPlaces.css";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "CN Tower",
    address: "290 Bremner Blvd, Toronto, ON M5V 3L9",
    description: "One of the best tourist place in Toronto",
    imageUrl:
      "https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg",
    creator: "user1",
    location: {
      lat: 43.6425662,
      lng: -79.3896317,
    },
  },
  {
    id: "p2",
    title: "Centennial College",
    address: "941 Progress Ave, Scarborough, ON M1G 3T8",
    description: "One of the best college in GTA",
    imageUrl:
      "https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg",
    creator: "user2",
    location: {
      lat: 43.7852043,
      lng: -79.230744,
    },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
