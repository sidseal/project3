import React, { Component } from "react";
import { User, Dropdown} from "../components/Create";
import { FormBtn } from "../components/Form";
// import Form from "../components/Form"
import ShowChoices from "../components/Choices"
import shows from "../../src/shows.json";
import Axios from "axios";
// import { DropdownList, Dropdown} from "../components/Create";

class CreateProfile extends Component {

// state = {
//     shows
//   };

showGp(event){
  event.preventDefault()
  console.log("showGp()")}
  


  render() {
     
    return (
     <div>
          
        <ShowChoices shows={shows.filter(show =>
          show.type === "Series"
        )} 
          // removeChoice={this.removeChoice}
         />
     
        <User />
        <Dropdown onClick = {(event)=> this.showGp(event)}>Gender/Preferences</Dropdown>
        <Dropdown name="">Series</Dropdown>
        <Dropdown name="">Movies</Dropdown>
        <FormBtn>Create My Profile!</FormBtn>
     </div>
  
    )}}
    





export default CreateProfile;