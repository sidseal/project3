import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "../styles/login.css";


function Login({ setLoggedUser, loggedUser }) {

  // Handles input change, Updates loggedUser state
  function handleInputChange(e) {
    const { name, value } = e.target;
    //Make api call to find loggedUser id

    // setLoggedUser loggedUser to add id property
    setLoggedUser({ ...loggedUser, [name]: value })
  };

  // handle Submit event
  const handleSubmit = e => {
    e.preventDefault();
    API.loginUser({
      email: loggedUser.email,
      password: loggedUser.password
      
      // email: req.body.email,
      // password: req.body.password,
    })
    .then(response=>console.log("handleSubmit",response))
    .catch(response=>console.log("handleSubmiterr",response))
    

    // api call to confirmUser
    // axios.post("/api/login", { isData: true }).then(
    //   response => console.log(response)
    // )
    // route to profile

    console.log("Inside the login handlesubmit event");
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
          <label>Email</label>
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
          <label>Password</label>
        </div>
      </div>
      <Link to={"/signup"} >
        <strong>
          Sign Up
        </strong>
      </Link>
      <button className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={handleSubmit}
      >Login
      </button>
    </>
  );
}

export default Login;