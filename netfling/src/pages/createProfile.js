import React, { Component } from "react";
import { User, Dropdown} from "../components/Create";
import { FormBtn } from "../components/Form";
// import Form from "../components/Form"
    // import Choices from "../components/Choices"
import shows from "../../src/shows.json";
// import { DropdownList, Dropdown} from "../components/Create";

class CreateProfile extends Component {

state = {
    shows
  };

  render() {
     
    return (
     <div>
            {/* {this.state.shows.map(show => ( 
        <Choices shows={shows} 
      removeChoice={this.removeChoice}
         />
     ))} */}
        <User />
        <Dropdown name="">Gender/Preferences</Dropdown>
        <Dropdown name="">Series</Dropdown>
        <Dropdown name="">Movies</Dropdown>
        <FormBtn>Create My Profile!</FormBtn>
     </div>
  
    );
 }
}





export default CreateProfile;