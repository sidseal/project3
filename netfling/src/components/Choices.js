import React from "react";

function ShowChoices(props) {
  return (
    <div className="card">
      <div className="content">
        <ol className="list-group">
          {props.shows.map(item => (
          <li className="list-group-item" key={item.id}>
            <strong>{item.type} Name:</strong> {item.name}
          </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ShowChoices;