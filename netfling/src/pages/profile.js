import React, { useState } from "react";
import { FormBtn } from '../components/Create';
import shows from "../../src/shows.json";
import ShowChoices from "../components/Choices";
import Card from 'react-bootstrap/Card';
import API from '../utils/API';
import "../styles/profile.css";


function RenderProfile({ setLoggedUser, loggedUser }) {
  console.log("Profile", { setLoggedUser, loggedUser });

  const [matchedUsers, setMatches] = useState(
    {
      MatchedResults: []
    }
  );

  const handleSubmit = e => {
    API.getMatches(loggedUser.email).then(matchesRes => {
      console.log(matchesRes)
      setMatches({ MatchedResults: matchesRes });
    })

  };

  return (
    <div>
      {/* Current User Card Info */}
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

      {/* Mapped Matched Users Cards genertaed */}
      {matchedUsers.MatchedResults.map(match =>
        <Card
          style={{ width: '18rem' }}
          key={match.id}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{match.username}</Card.Title>
            <Card.Text>{match.age} </Card.Text>
            <Card.Text>{match.email} </Card.Text>
          </Card.Body>
        </Card>
      )}

      <form action="./login" method="get">
        <button class="btn btn-submit" type="submit" name="logout-submit">Logout</button>
      </form>

    </div>

  );
}

export default RenderProfile;