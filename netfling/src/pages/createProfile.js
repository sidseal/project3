import React, { useState } from "react";
import { User } from "../components/Create";
import shows from "../../src/shows.json";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import API from '../utils/API';
// import { Link } from "react-router-dom";
// import Axios from "axios";
import "../styles/createProfile.css";
// import { DropdownList, Dropdown} from "../components/Create";

let UserGenderPrefArr = [
  {
    id: 1,
    name: "Female"
  },
  {
    id: 2,
    name: "Male"
  },
  {
    id: 3,
    name: "Both"
  }
]

const UsersGender = [
  {
    id: 1,
    name: "Female"
  },
  {
    id: 2,
    name: "Male"
  }
]

function CreateProfile({ setLoggedUser, loggedUser }) {
  // Choices State
  const [choices, setChoices] = useState(
    {
      username: "",
      age: "",
      contactEmail: "",
      usersGender: "",
      usergenderPreference: "",
      img: "",
      shows: []
    }
  );

  // Filtered Arrays
  const Series = shows.filter(series => series.type === "Series");
  const Movies = shows.filter(movie => movie.type === "Movie");

  // Handel Input changes 
  function handleInputChange(e) {
    const { name, value } = e.target;
    setChoices({ ...choices, [name]: value });
  };

  // handleSelect func
  const handleSelect = (e) => {
    console.log(e);
    // const { name, eventKey } = e.target;
    // setChoices({ ...choices, [name]: eventKey });
  }

  // handle Submit event
  const handleSubmit = e => {
    // api call to update profile
    API.createProfile({
      id: loggedUser._id,
      choices
    })
      .then(response => {
        console.log("Create Profile handleSubmit", response)

      })
      .catch(response => console.log("handleSubmiterr", response))

  };

  return (
    <>
      <form>
        {/* UserName Input */}
        <User
          placeholder="create username here"
          name="username"
          onChange={handleInputChange}
        />

        {/* Age, int */}
        <User
          placeholder="Insert Age here"
          name="age"
          onChange={handleInputChange}
        />

        {/* Contact Email, email format */}
        <User
          placeholder="Add Contact email here"
          name="contactEmail"
          onChange={handleInputChange}
        />

        {/* Upload Pic */}

        <DropdownButton onSelect={handleSelect} id="dropdown-basic-button" variant="danger" title="Your Gender">
          {UsersGender.map(gender =>
            <Dropdown.Item
              // as="button"
              key={gender.id}
              name="usersGender"
              eventKey={gender.name}
            >
              {gender.name}
            </Dropdown.Item>
          )}
        </DropdownButton>

        {/* Gender Pref Dropdown */}
        <DropdownButton onSelect={handleSelect} id="dropdown-basic-button" variant="danger" title="Your Preference">
          {UserGenderPrefArr.map(preference =>
            <Dropdown.Item
              // as="button"
              key={preference.id}
              name="usergenderPreference"
              eventKey={preference.name}
            >
              {preference.name}
            </Dropdown.Item>
          )}
        </DropdownButton>

        <p>Choose your top 4 and get matched</p>

        {/* series Dropdown */}
        <DropdownButton id="dropdown-basic-button" variant="danger" title="Choose Netflix series">
          {Series.map(series =>
            <Dropdown.Item
              as="button"
              key={series.id}
              name={series.name}
            >
              {series.name}
            </Dropdown.Item>
          )}
        </DropdownButton>

        {/* Movie Dropdown */}
        <DropdownButton id="dropdown-basic-button" variant="danger" title="Choose Netflix Movie">
          {Movies.map(movie =>
            <Dropdown.Item
              as="button"
              key={movie.id}
              name={movie.name}
            >
              {movie.name}
            </Dropdown.Item>
          )}
        </DropdownButton>
      </form>

      {/*Card Infor  */}
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="https://avatars1.githubusercontent.com/u/59153195?s=460&u=5c4f0554fbecf573645c785ef5ef66db1524bf8b&v=4" id="thumbnail" alt="profilepic" ></img>
        </div>
        <div className="card-content">

        </div>
      </div>

      {/* Create Profile button */}
      <div onClick={handleSubmit} >
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action">
          Create My Profile!</button>
      </div>

      {/* Logout Button */}
      <form action="/login" method="get">
        <button className="btn btn-submit" type="submit" name="logout-submit">Logout</button>
      </form>

    </>

  );
}
export default CreateProfile;
