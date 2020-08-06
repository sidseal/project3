import React from "react";
import "../../src/shows.json";

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
       {/* <DropdownList /> */}
       <li>{props.name}</li>
      </ul>
      </div>
    );
}

// export function DropdownList(props) {
//   return (
    
//     <li>{props.name}</li>
    
//   );
// }