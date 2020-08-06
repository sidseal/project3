import React from "react";

export function User(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }

export function Dropdown(props) {
    return (
      <div>
      <a className='dropdown-trigger btn' href='jsx-a11y/anchor-is-valid' data-target='dropdown1'>{props.children}</a>

      <ul id='dropdown1' className='dropdown-content'>
        <li>{props.name}</li>
      </ul>
      </div>
    );
}
