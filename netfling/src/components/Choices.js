import React from "react";

function Choices(props) {
  return (
    <div className="card">
      <div className="content">
        <ol className="list-group">
          {props.shows.map(item => (
          <li className="list-group-item" key={item.id}>
            <strong>{props.type} Name:</strong> {props.name}
          </li>
          ))}
        </ol>
      </div>
      <span onClick={() => props.removeChoice(props.id)} className="remove">
        𝘅
      </span>
      <span onClick={() => props.addChoice(props.id)} className="add">
        +
      </span>
    </div>
  );
}

export default Choices;