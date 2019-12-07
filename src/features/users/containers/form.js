import React from "react";
import { Form, Button } from "semantic-ui-react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      defaultChapati: 2
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="formSection">
        <Form>
          <Form.Field>
            <label> Name</label>
            <input
              name="name"
              placeholder="First Name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Mobile</label>
            <input
              name="mobile"
              placeholder="Mobile"
              type="number"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Default chapati</label>
            <input
              name="defaultChapati"
              placeholder="Chapatis"
              type="number"
              value={this.state.defaultChapati}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default UserForm;
