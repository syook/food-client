import React from "react";
import { Icon, Card, Button } from "semantic-ui-react";
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
const DELETE_USER = gql`
	mutation deleteUserMutation($id: String!) {
		deleteUser(id: $id) {
			_id
		}
	}
`;

const UserTable = props => {
  return (
    <div>
      {[props.currentData].map((item, i) => {
        return (
          <Card className="userCard" key={i}>
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Meta>{item.email}</Card.Meta>
              <Card.Meta>{item.mobile}</Card.Meta>
              <Card.Description
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  Default Chapati :<strong> {item.chapatiCount}</strong>
                </span>
                <span>|</span>
                {/* <span>
                  Default Rice Portion :
                  <strong> {item.defaultRicePortion}</strong>
                </span> */}
                <Mutation
                  mutation={DELETE_USER}
                  variables={{ id: item._id }}
                  update={(store, { data: { deleteUser } }) =>
                    props.deleteUser(store, deleteUser)
                  }
                >
                  {deleteUserMutation => (
                    <>
                      <Button onClick={() => props.editUser(item._id)}>Edit</Button>
                      <Button type="submit" onClick={deleteUserMutation}>
                        Delete
										</Button>
                    </>
                  )}
                </Mutation>
              </Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
};
export default UserTable;
