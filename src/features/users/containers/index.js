import React from "react";
import UserForm from "./form";
import UserTable from './table'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

const USER_QUERY = gql`
{
  users{
    _id
    name
    email
    mobile
    chapatiCount
  }
}
`;

const GET_USER = gql`
	query getUserQuery($id: String!) {
		user(id: $id) {
      _id
      name
      email
      mobile
      chapatiCount
		}
	}
`;



class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAddUser: false
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      this.fetchUser(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id)
      if (this.props.match.params.id !== prevProps.match.params.id) {
        this.fetchUser(this.props.match.params.id);
      }
  }
  toggle = () => {
    this.setState({ isAddUser: !this.state.isAddUser });
  };

  fetchUser = async id => {
    const response = await this.props.client.query({
      query: GET_USER,
      variables: { id },
    });
    const { user } = response.data;
    this.setState({ user });
  };

  addUser = (store, user) => {
    const data = store.readQuery({ query: USER_QUERY });
    data.users.unshift(user);
    store.writeQuery({
      query: USER_QUERY,
      data,
    });
  };
  updateUser = (store, user) => {
    console.log('blaaa', user)
    const data = store.readQuery({ query: USER_QUERY });
    const index = data.users.findIndex(item => item._id === user._id);
    data[index] = user;
    store.writeQuery({
      query: USER_QUERY,
      data,
    });
  };
  editUser = id => {
    this.props.history.push(`/users/${id}`);
  };
  deleteUser = (store, user) => {
    const data = store.readQuery({ query: USER_QUERY });
    const index = data.users.findIndex(item => item._id === user._id);
    const newData = [...data.users];
    newData.splice(index, 1);
    store.writeQuery({
      query: USER_QUERY,
      data: { ...data, users: newData },
    });
  };
  render() {
    return (
      <div style={{ marginTop: "80px", width: "90vw", maxWidth: 400 }}>
        <UserForm toggle={this.toggle} addUser={this.addUser} updateUser={this.updateUser} user={this.state.user} />
        <Query query={USER_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;

            const users = data.users;
            return (
              <div>
                {users.map(user => (
                  <UserTable key={user.id} currentData={user} deleteUser={this.deleteUser} editUser={this.editUser} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default withApollo(Users)
