import React from "react";

function SingUp({ setLoggedUser, loggedUser }) {

  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoggedUser({ ...loggedUser, [name]: value })
  };

  const handleSubmit = e => {
    e.preventDefault();

    // api call to confirm user

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
      <button className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={handleSubmit}
      >Sign Up
             <i className="material-icons right">send</i>
      </button>
    </>
  );
}

export default SignUp;