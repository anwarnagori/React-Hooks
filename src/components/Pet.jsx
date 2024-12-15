import React from "react";

function Pet( props ) {
  const { name, animal, breed, images, location } = props;
  // let item = props.item;
  // console.log(props.item)
  return (
    <div className="pet">
      <div className="image-container">
        <img src={images[0]} alt="" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} — {breed} — {location}
        </h2>
      </div>
    </div>
  );
}

export default Pet;
