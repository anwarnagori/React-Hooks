import React from "react";

function Pet( props ) {
  const { name, animal, breed, images, location } = props;
  // let item = props.item;
  // console.log(props.item)
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <div className="pet">
      <div className="image-container">
        <img src={hero} alt="" />
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
