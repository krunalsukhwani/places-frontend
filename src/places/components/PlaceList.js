import React from "react";

import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  //if places are not available
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found. May be create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  //if places are available
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          address={place.address}
          description={place.description}
          image={place.imageUrl}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
