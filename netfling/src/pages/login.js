import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "../styles/login.css";

function Login({ setLoggedUser, loggedUser }) {

  const [errMessage, setErrMessage] = useState(
      {
        errMessageText: ""
     }
  );

  // Handles input change, Updates loggedUser state
  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoggedUser({ ...loggedUser, [name]: value })
  };

  // handle Submit event
  const handleSubmit = e => {
 
    API.loginUser({
      email: loggedUser.email,
      password: loggedUser.password
      
      // email: req.body.email,
      // password: req.body.password,
    })
    .then(response=>console.log("handleSubmit",response))
    .catch(err=>{
         setErrMessage({errMessage:"Email or password invalid"}) 
    })
    
    // api call to confirmUser
    // axios.post("/api/login", { isData: true }).then(
    //   response => console.log(response)
    // )

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

      {/* <Link to={"/profile"} onClick={handleSubmit} > */}
      <button className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={handleSubmit}
      >Login
      </button>
      {/* </Link> */}
    </>
  );
}

export default Login;