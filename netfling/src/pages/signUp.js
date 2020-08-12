import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API"

function SignUp({ setLoggedUser, loggedUser }) {

  // Handles input change, Updates loggedUser state
  function handleInputChange(e) {
    // Generate random id #

    const { name, value } = e.target;
    // Add _id protery to loggeduser state
    setLoggedUser({ ...loggedUser, [name]: value });
  };

  // handle Submit event
  const handleSubmit = e => {
    // api call to AddUser
    API.saveUser({
      //_id: loggedUser.id, 
      email: loggedUser.email,
      password: loggedUser.password,})
    .then(response=>console.log("handleSubmit",response))
    .catch(response=>console.log("handleSubmiterr",response))


    // route to createProfile

  


    console.log("Inside signUp handlesubmit event ");
    console.log("userId is " + loggedUser.id);
    console.log("username is " + loggedUser.email);
    console.log("password is " + loggedUser.password);
  };

  return (
    <>
      <div className="row">
        <div className="input-field col s12">
          <input
            onChange={handleInputChange}
            id="email"
            type="text"
            className="validate"
            name="email"
          />
          <label >Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            onChange={handleInputChange}
            id="password"
            type="password"
            className="validate"
            name="password"
          />
          <label >Password</label>
        </div>
      </div>
      <Link to={"/login"} >
        <strong>
          Login 
        </strong>
      </Link>
      <Link to={"/create"} onClick={handleSubmit}>
        {/* // className="btn waves-effect waves-light"
        // type="submit"
  // name="action" */}
          
      Sign Up
      </Link>
    </>
  );
}

export default SignUp;