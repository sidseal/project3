import React from "react";
// import User from "../components/Create";
// import ShowChoices from "../components/Choices"
import shows from "../../src/shows.json";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import { Link } from "react-router-dom";
// import Axios from "axios";
import "../styles/createProfile.css";
// import { DropdownList, Dropdown} from "../components/Create";

let GenderPrefArr = [
  {
    id: 1,
    name: "Female interested in Male"
  },
  {
    id: 2,
    name: "Male interested in Female"
  },
  {
    id: 3,
    name: "Female interested in Female"
  },
  {
    id: 4,
    name: "Male interested in Male"
  },
  {
    id: 5,
    name: "None"
  },
]

function CreateProfile({ setLoggedUser, loggedUser }) {
    
  console.log({ setLoggedUser, loggedUser })

  // Filtered Arrays
  const Series = shows.filter(series => series.type === "Series");
  const Movies = shows.filter(movie => movie.type === "Movie");
  
  return (
    <div>
       {/* <User placeholder="create username here"/> */}

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

      {/* Gender Pref Dropdown */}
      <DropdownButton id="dropdown-basic-button" variant="danger" title="Gender Preference">
        {GenderPrefArr.map(preference =>
          <Dropdown.Item
            as="button"
            key={preference.id}
            name={preference.name}
          >
            {preference.name}
          </Dropdown.Item>
        )}
      </DropdownButton>

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
