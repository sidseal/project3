import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import CreateProfile from "./pages/createProfile";
import RenderProfile from "./pages/profile";
// import { FormBtn } from "./components/Create";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Current User
  const [loggedUser, setLoggedUser] = useState(
    {
      _id: "",
      email: ""
    }
  );



  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

          <Route exact path={["/", "/login"]}>
            <Login setLoggedUser={setLoggedUser} loggedUser={loggedUser} />
          </Route>

          <Route path="/signup">
            <SignUp setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
          </Route>

          <Route exact path="/create">
            <CreateProfile setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
          </Route>

          <Route exact path="/profile">
            {/* <FormBtn onClick={window.location.assign("/profile")}>Create My Profile!</FormBtn> */}
            <RenderProfile setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
          </Route>
{/* 
          <Route exact path="/create">
            <CreateProfile />
          </Route> */}

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;