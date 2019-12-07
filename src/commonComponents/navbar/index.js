import React from "react";
import {Link} from 'react-router-dom'
import { Grid } from "semantic-ui-react";

function Navbar() {
  return (
    <div className="navbar">
      <Grid divided relaxed={true} doubling={true}>
        <Grid.Row stretched={true} verticalAlign="middle">
          <Grid.Column className="nav-item" width={2}>
            <Link to='/dashboard'>Logo</Link>
          </Grid.Column>
          <Grid.Column className="nav-item" width={4}>
           <Link to='/users'> Users</Link>
          </Grid.Column>
          <Grid.Column className="nav-item" width={5}>
             <Link to='/fooditems'> Food Items</Link>
          </Grid.Column>
          <Grid.Column className="nav-item" width={5}>
            <Link to='/dailymenu'> Daily Menu</Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Navbar;
