import React from "react";
import UserForm from "./form";
import UserTable from './table'
import {Button} from 'semantic-ui-react'

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "hd", email: "some@gmai.com", mobile: 7888743914,defaultChapati:3 },
        { name: "sg", email: "breakfast@gmail.com",mobile:1234567890,defaultChapati:2},
      ],
      isAddUser: false
    };
  }

  toggle = () => {
    this.setState({ isAddUser: !this.state.isAddUser });
  };

  render() {
    return (
      <div style={{ marginTop: "80px", width: "90vw", maxWidth: 400 }}>
        {this.state.isAddUser ? (
          <UserForm toggle={this.toggle} />
        ) : (
          <>
            <UserTable currentData={this.state.data} toggle={this.toggle}/>
          </>
        )}
      </div>
    );
  }
}
