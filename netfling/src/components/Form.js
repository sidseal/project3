import React from "react";

export function EmailInput(props) {
    return (
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" {...props} />
          <label for="email">Email</label>
        </div>
      </div>
    );
}

export function PasswordInput(props) {
    return (
        <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" {...props} />
          <label for="password">Password</label>
        </div>
        </div>
    );
}

export function FormBtn(props) {
  return (
      <button className="btn waves-effect waves-light" type="submit" name="action">{props.children}
      {/* <i className="material-icons right">send</i> */}
      </button>
  );
}