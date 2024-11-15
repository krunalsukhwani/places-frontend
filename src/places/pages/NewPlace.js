import React from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        id="title"
        placeholder="Enter Title"
        label="Title"
      />
      <Input
        element="textarea"
        id="description"
        label="Title"
        rows="5"
      />
    </form>
  );
};

export default NewPlace;
