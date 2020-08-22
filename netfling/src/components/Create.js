import React from "react";
import "../../src/shows.json";

export function User(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
};

export function FormBtn(props) {
  return (
      <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>{props.children}
      </button>
  );
};

