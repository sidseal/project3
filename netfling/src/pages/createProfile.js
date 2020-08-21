import React from "react";
import { User } from "../components/Create";
import ShowChoices from "../components/Choices"
import shows from "../../src/shows.json";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";
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
// const testState = props.location.state.id;
  console.log({ setLoggedUser, loggedUser })

  // Filtered Arrays
  const Series = shows.filter(series => series.type === "Series");
  const Movies = shows.filter(movie => movie.type === "Movie");

  return (
    <div>
      <User placeholder="create username here" />

      <DropdownButton id="dropdown-basic-button" variant="danger" title="Your Gender">
        {UsersGender.map(gender =>
          <Dropdown.Item
            as="button"
            key={gender.id}
            name={gender.name}
          >
            {gender.name}
          </Dropdown.Item>
        )}
      </DropdownButton>

      {/* Gender Pref Dropdown */}
      <DropdownButton id="dropdown-basic-button" variant="danger" title="Your Preference">
        {UserGenderPrefArr.map(preference =>
          <Dropdown.Item
            as="button"
            key={preference.id}
            name={preference.name}
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

      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="https://avatars1.githubusercontent.com/u/59153195?s=460&u=5c4f0554fbecf573645c785ef5ef66db1524bf8b&v=4" id="thumbnail" alt="profilepic" ></img>
        </div>
        <div className="card-content">
          <p> <ShowChoices shows={shows.filter(show =>
            show.id === 2
          )}
          />
          </p>
        </div>
      </div>
      <Link to={"/profile"}>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action">
          Create My Profile!</button>
      </Link>

      <form action="./login" method="get">
        <button class="btn btn-submit" type="submit" name="logout-submit">Logout</button>
      </form>

    </div>

    // <Dropdown onClick = {(event)=> this.showGp(event)}>Gender/Preferences</Dropdown>
    //   <ShowChoices shows={shows.filter(show =>
    //     show.type === "series"
    //   )} 
    //    />
    // <div className="card">
    //   <div className="card-image waves-effect waves-block waves-light">
    //     <img className="activator" src="https://avatars1.githubusercontent.com/u/59153195?s=460&u=5c4f0554fbecf573645c785ef5ef66db1524bf8b&v=4" id="thumbnail" alt ="profilepic" ></img>
    //   </div>
    // <div className="card-content">
    // <p> <ShowChoices shows={shows.filter(show =>
    //     show.id === 2
    //   )} 
    //   />
    // </p>
    // </div>
    // </div>
    //   {/* <Dropdown name="">series</Dropdown>
    //   <Dropdown name="">Movies</Dropdown> */}
    //   <Link to={"/profile"}>Create My Profile!
    //   {/* <FormBtn onClick={() => console.log(loggedUser.username) || window.location.assign("/profile")}>Create My Profile! </FormBtn> */}
    //   </Link>
    // </div>  
  );
}
export default CreateProfile;
