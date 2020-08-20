import React, { useState } from 'react';
import { Link , Redirect } from "react-router-dom";
import API from "../utils/API";
import "../styles/signUp.css";

function SignUp({ setLoggedUser, loggedUser }) {
  const [password, setPassword] = useState(
    {
      password: ""
    }
  );
  const [byeBye, setByeBye] = useState({render:false, id: null})
  // Handles input change, Updates loggedUser state
  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoggedUser({ ...loggedUser, [name]: value });
    setPassword({ ...password, [name]: value })

  };

  // handle Submit event
  const handleSubmit = e => {
    // api call to AddUser
    console.log({
      //id: loggedUser.id, 
      email: loggedUser.email,
      password: password.password
    })
    API.saveUser({
      //id: loggedUser.id, 
      email: loggedUser.email,
      password: password.password
    })
      .then(response => {
        console.log("handleSubmit", response)
        const servedId= response.data._id
        console.log(servedId)
        // setLoggedUser(...loggedUser, { id: response.data._id })
        // window.location.redirect(`/create?id=${response.data._id}`)
        setByeBye({render:true, id:servedId})
        setLoggedUser({ ...loggedUser, _id:servedId});
      })
      .catch(response => console.log("handleSubmiterr", response))

    // console.log("Inside signUp handlesubmit event ");
    // console.log("userId is " + loggedUser.id);
    // console.log("username is " + loggedUser.email);
    // console.log("password is " + loggedUser.password);

  };

  return (
  <>
      { byeBye.render? (<Redirect
          to={{
            pathname: "/create",
            search: `?id=${byeBye.id}`,
          //   state: {
          //     email:this.state.email,
          //     id:this.state.id
          // }
            //state: { referrer: currentLocation }
          }}
        />): ( <>
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
        </> )}
        </>)
}

export default SignUp;