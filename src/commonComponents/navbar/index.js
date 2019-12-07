import React from "react";
import { Grid } from "semantic-ui-react";

function Navbar() {
  return (
    <div className="navbar">
      <Grid divided relaxed={true} doubling={true}>
        <Grid.Row stretched={true} verticalAlign="middle">
          <Grid.Column className="nav-item" width={2}>
            Logo
          </Grid.Column>
          <Grid.Column className="nav-item" width={4}>
            Dashboard
          </Grid.Column>
          <Grid.Column className="nav-item" width={5}>
            Food Items
          </Grid.Column>
          <Grid.Column className="nav-item" width={5}>
            Daily Menu
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Navbar;
