import React, { useState } from "react";
import { Link, Redirect }  from "react-router-dom";
import API from "../utils/API";
import "../styles/login.css";

function Login({ setLoggedUser, loggedUser }) {
  // Password state
  const [password, setPassword] = useState(
    {
      password: ""
    }
  );

  // Handles input change, Updates loggedUser state and Password State
  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setLoggedUser({ ...loggedUser, [name]: value });
  //   setPassword({...password, [name]: value})
  // };

  // handle Submit event
  const handleSubmit = e => {
    // Logs in User
    API.loginUser({
      email: loggedUser.email,
      password: password.password
      // email: req.body.email,
      // password: req.body.password,
    })
      .then(response => {
        console.log("handleSubmit", response)
        const servedId = response.data._id
        setLoggedUser({ ...loggedUser,render: true, _id: servedId });
      })
      .catch(response => console.log("handleSubmiterr", response))

  };

  return (
    <>
      {loggedUser.render ? (<Redirect
        to={{
          pathname: "/profile",
          search: `?id=${loggedUser._id}`,
          //state: { referrer: currentLocation }
        }}
      />) : (<>
        <div className="row">
          <div className="input-field col s12">
            <input
              // onChange={handleInputChange}
              onChange={e => setLoggedUser({ ...loggedUser, email: e.target.value })}
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
              // onChange={handleInputChange}
              onChange={e => setPassword({ ...password, password: e.target.value })}
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

        <div onClick={handleSubmit} >
          <button className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >Login
      </button>
        </div>
      </>)}
    </>)
}

export default Login;