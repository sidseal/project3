import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API";
import "../styles/signUp.css";

function SignUp({ setLoggedUser, loggedUser }) {
  // Sets Password
  const [password, setPassword] = useState(
    {
      password: ""
    }
  );

  // ByeBye state
  const [byeBye, setByeBye] = useState({ render: false, id: null })

  // Handles input change, Updates loggedUser state
  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setLoggedUser({ ...loggedUser, [name]: value });
  //   setPassword({ ...password, [name]: value })
  // };

  // handle Submit event
  const handleSubmit = e => {
    // api call to AddUser
    API.saveUser({
      email: loggedUser.email,
      password: password.password
    })
      .then(response => {
        console.log("handleSubmit", response)
        const servedId = response.data._id
        // setLoggedUser(...loggedUser, { id: response.data._id })
        // window.location.redirect(`/create?id=${response.data._id}`)
        setByeBye({ render: true, id: servedId })
        setLoggedUser({ ...loggedUser, _id: servedId });
      })
      .catch(response => console.log("handleSubmiterr", response))

  };

  return (
    <>
      {byeBye.render ? (<Redirect
        to={{
          pathname: "/create",
          search: `?id=${byeBye.id}`,
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
            <label >Email</label>
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
            <label >Password</label>
          </div>
        </div>

        <Link to={"/login"}>
          <strong>
            Login
          </strong>
        </Link>

        <div //to={"/create"} 
          onClick={handleSubmit} >
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action">
            Sign Up</button>
        </div>
      </>)}
    </>)
}

export default SignUp;