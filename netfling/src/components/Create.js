import React from "react";
import "../../src/shows.json";
// import { PromiseProvider } from "mongoose";

export function User(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }

export function Dropdown(props) {
    return (
      <div onClick={props.onClick}>
      <a className='dropdown-trigger btn' href='jsx-a11y/anchor-is-valid' data-target='dropdown1'>{props.children}</a>
      <ul id='dropdown1' className='dropdown-content'>
       {/* <DropdownList /> */}
       <li>{props.name}</li>
      </ul>
      </div>
    );
}

export function FormBtn(props) {
  return (
      <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>{props.children}
      </button>
  );
}