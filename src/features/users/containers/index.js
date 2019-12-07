import React from "react";
import UserForm from "./form";

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginTop: "80px", width: "90vw", maxWidth: 400 }}>
        <UserForm />
      </div>
    );
  }
}
