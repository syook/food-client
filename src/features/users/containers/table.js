import React from "react";
import SyookTable from "@syook/react-tabulous";
import { Icon, Card, Button } from "semantic-ui-react";

const UserTable = props => {
  const userDetails = [
    {
      name: "Shyam",
      email: "shyam@syook.com",
      phone: 9876543210,
      defaultChapati: 2,
      defaultRicePortion: "Full"
    },
    {
      name: "Ram",
      email: "ram@syook.com",
      phone: 9876543210,
      defaultChapati: 1,
      defaultRicePortion: "Double"
    }
  ];
  return (
    <div>
      {/* <div className="full-width formSection">
        <div className="flex-start full-width pt-20 info">
          <label>
            <Icon name="calendar alternate outline" size="med" />:{" "}
            <span>07/12/2019</span>
          </label>
        </div>
      </div> */}
      <Button onClick={props.toggle}>Add User</Button>
      {userDetails.map(item => {
        return (
          <Card className="userCard">
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Meta>{item.email}</Card.Meta>
              <Card.Meta>{item.phone}</Card.Meta>
              <Card.Description
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  Default Chapati :<strong> {item.defaultChapati}</strong>
                </span>
                <span>|</span>
                <span>
                  Default Rice Portion :
                  <strong> {item.defaultRicePortion}</strong>
                </span>
              </Card.Description>
            </Card.Content>
          </Card>
        );
      })}
      {/* <Card>
        <Card.Content>
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card> */}
    </div>
  );
};
export default UserTable;
