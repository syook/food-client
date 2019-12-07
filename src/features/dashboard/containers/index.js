import React from "react";
import { Icon, List, Segment } from "semantic-ui-react";

function Dashboard() {
  return (
    <div style={{ marginTop: 60 }}>
      <div className="flex-center">
        <h2>What's cooking today?</h2>
      </div>
      <div className="flex-start full-width pt-20 info">
        <label>
          <Icon name="calendar alternate outline" size="med" />:{" "}
          <span>07/12/2019</span>
        </label>
      </div>
      <Segment>
        <div className="info">
          <div>
            <label className="label">Breakfast</label>
          </div>
          <div>
            <List as="ul">
              <List.Item as="li">Item 1</List.Item>
              <List.Item as="li">Item 2</List.Item>
              <List.Item as="li">Item 3</List.Item>
            </List>
          </div>
        </div>
      </Segment>
      <Segment>
        <div className="info">
          <div>
            <label className="label">Lunch</label>
          </div>
          <div>
            <List as="ul">
              <List.Item as="li">Item 1</List.Item>
              <List.Item as="li">Item 2</List.Item>
              <List.Item as="li">Item 3</List.Item>
            </List>
          </div>
        </div>
      </Segment>
    </div>
  );
}

export default Dashboard;
