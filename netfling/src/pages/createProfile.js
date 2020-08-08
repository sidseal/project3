import React from "react";
import { User, Dropdown } from "../components/Create";
import ShowChoices from "../components/Choices"
import shows from "../../src/shows.json";

import { Link } from "react-router-dom";

// import Axios from "axios";
import "../styles/createProfile.css";
// import { DropdownList, Dropdown} from "../components/Create";

function CreateProfile({setLoggedUser,loggedUser}) {
   


// showGp(event){
//   event.preventDefault()
//   console.log("showGp()")
// };     


  console.log({setLoggedUser,loggedUser})

    return (
      
     <div>
      <User placeholder="create username here" />
      <Dropdown onClick = {(event)=> this.showGp(event)}>Gender/Preferences</Dropdown>
  
        <ShowChoices shows={shows.filter(show =>
          show.type === "Series"
        )} 
         />
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">

          <img className="activator" src="https://avatars1.githubusercontent.com/u/59153195?s=460&u=5c4f0554fbecf573645c785ef5ef66db1524bf8b&v=4" id="thumbnail" alt ="profilepic" ></img>
        </div>
      <div class="card-content">
      <p> <ShowChoices shows={shows.filter(show =>
          show.id === 2

          <img className="activator" src="https://randomuser.me/api/portraits/thumb/men/58.jpg" id="thumbnail" alt ="profilepic" ></img>
        </div>
      <div class="card-content">
      <p> <ShowChoices shows={shows.filter(show =>
          show.id === 5

        )} 
        />
      </p>
      </div>
      </div>
        {/* <Dropdown name="">Series</Dropdown>
        <Dropdown name="">Movies</Dropdown> */}

        <Link to={"/profile"}>Create Profile
        {/* <FormBtn onClick={() => console.log(loggedUser.username) || window.location.assign("/profile")}>Create My Profile! </FormBtn> */}
        </Link>

      </div>  
    );

}

export default CreateProfile;