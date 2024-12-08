import { useState, useEffect } from "react";
const ANIMALS = ["Select an Option", "bird", "cat", "dog", "rabbit", "reptile"];
// const breeds = ["", "Buldoog", "husky"];
const breedsData = [
  {
    animal: 0,
    breedName: "Select an Option",
  },
  {
    animal: 1,
    breedName: "german sheperd",
  },
  {
    animal: 1,
    breedName: "Bul Dog",
  },
  {
    animal: 2,
    breedName: "Persian",
  },
  {
    animal: 2,
    breedName: "russian",
  },
  {
    animal: 3,
    breedName: "paramount",
  },
];
function SearchParams() {
  const [location, setLocation] = useState("ABC");
  const [animal, setAnimal] = useState("");
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  //   let location = "Seattle, WA";

  useEffect(() => {
    fetchPets();
  }, []);

  async function fetchPets() {
    const response = await fetch("http://pets-v2.dev-apis.com/pets");
    const data = await response.json();
    setPets(data.pets);
    console.log(data);
  }

  const handleChange = (e) => {
    console.log("e", e);
    setLocation(e.target.value);
  };
  const handleAnimalChange = (e) => {
    console.log("e", e);
    let value = e.target.value;
    setAnimal(value);

    if (value === "dog") {
      let filterData = breedsData.filter((item) => item.animal === 1);
      setSelectedBreeds(filterData);
    } else if (value === "cat") {
      let filterData = breedsData.filter((item) => item.animal === 2);
      setSelectedBreeds(filterData);
    } else {
      setSelectedBreeds([]);
    }
  };
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={handleChange}
            value={location}
            type="text"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={handleAnimalChange}
            onBlur={handleAnimalChange}
          >
            {ANIMALS.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
            {/* <option value="bird">Bird</option>
            <option value="cat">Cat</option> */}
          </select>
          <label htmlFor="breed">
            Breed
            <select
              disabled={!selectedBreeds.length}
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              onBlur={(e) => setBreed(e.target.value)}
            >
              {selectedBreeds.map((breed, index) => (
                <option key={index} value={breed.breedName}>
                  {breed.breedName}
                </option>
              ))}
              {/* <option value="german">German</option> */}
            </select>
          </label>
        </label>
        <button>Submit</button>
      </form>
      <div className="search">
        <div className="info">
          <h1>{"Luna"}</h1>
          <h2>{`${"dog"} — ${"animal"} — ${"US"}`}</h2>
        </div>
      </div>
    </div>
  )
}

export default SearchParams;
