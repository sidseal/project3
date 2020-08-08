import React from "react";
import axios from "axios";

function Login({ setLoggedUser, loggedUser }) {

  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoggedUser({ ...loggedUser, [name]: value })
  };

  
  const handleSubmit = e => {
    e.preventDefault();

    // api call to confirm user
    axios.post("/api/login", {isData: true}).then(
        response=>console.log(response)
    )
    // route to profile
    
    console.log("its in the handlesubmit event ");
    // find way to set unique id, returns as undefined
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