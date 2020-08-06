import React from "react";
import { User, Dropdown } from "../components/Create";
import { FormBtn } from "../components/Form";

// genderOptions = [
//     id: "",
//     genderPreference: "",
// ];

function CreateProfile() {
    return (
        <div>
        <User />
        <Dropdown name="">Gender/Preferences</Dropdown>
        <Dropdown name="">Series</Dropdown>
        <Dropdown name="">Movies</Dropdown>
        <FormBtn />
        </div>
    );
}





export default CreateProfile;