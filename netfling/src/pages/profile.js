import React from "react";
import { FormBtn } from '../components/Create';
import shows from "../../src/shows.json";
import ShowChoices from "../components/Choices";
import API from '../utils/API';
import "../styles/profile.css";

function RenderProfile({ setLoggedUser, loggedUser }) {
  console.log("Profile",{ setLoggedUser, loggedUser });

  const handleSubmit = e => {
    // res is array of matches
    API.getMatches(loggedUser.email).then(res => { 
      console.log("profile Get Matches in event listerner",res)
     })
  };

  return (

    <div>
      <h3>Hey MacyMo!</h3>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="https://avatars1.githubusercontent.com/u/59153195?s=460&u=5c4f0554fbecf573645c785ef5ef66db1524bf8b&v=4" id="thumbnail" alt="profilepic" ></img>
        </div>
        <div class="card-content">
          <p> <ShowChoices shows={shows.filter(show =>
            show.id === 2
          )}
          />
          </p>
        </div>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <p>GoodLookin_89</p>
            <img className="activator" src="https://randomuser.me/api/portraits/thumb/men/6.jpg" id="thumbnail" alt="profilepic" ></img>
          </div>
          <div class="card-content">
            <p> <ShowChoices shows={shows.filter(show =>
              show.id === 2
            )}
            />
            </p>
          </div>
          <div className="card-image waves-effect waves-block waves-light">
            <p>HotScruffStuff</p>
            <img className="activator" src="https://randomuser.me/api/portraits/thumb/men/58.jpg" id="thumbnail" alt="profilepic" ></img>
          </div>
          <div class="card-content">
            <p> <ShowChoices shows={shows.filter(show =>
              show.id === 2
            )}
            />
            </p>
          </div>
        </div>
      </div>
      <FormBtn
        onClick={handleSubmit}
      >Get Matches</FormBtn>
    </div>


  );
}

export default RenderProfile;