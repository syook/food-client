import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <div className="navbar">
      <Menu>
        <Menu.Item name="logo">
          <Link to="/dashboard">Logo</Link>
        </Menu.Item>
        <Menu.Item name="users">
          <Link to="/users"> Users</Link>
        </Menu.Item>
        <Menu.Item name="foodItems">
          <Link to="/fooditems"> Food Items</Link>
        </Menu.Item>
        <Menu.Item name="dailyMenu">
          <Link to="/dailymenu"> Daily Menu</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
