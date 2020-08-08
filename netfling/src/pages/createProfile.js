import React from "react";
import { User, Dropdown } from "../components/Create";
import ShowChoices from "../components/Choices"
import shows from "../../src/shows.json";
// import Axios from "axios";
import "../styles/createProfile.css";
// import { DropdownList, Dropdown} from "../components/Create";

function CreateProfile() {

// showGp(event){
//   event.preventDefault()
//   console.log("showGp()")
// };     


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
      </div>  
    );

}

export default CreateProfile;