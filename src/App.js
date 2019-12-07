import React from "react";
import Navbar from "./commonComponents/navbar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Users from "./features/users/containers";
import FoodItems from "./features/foodItems/containers";
import Dashboard from "./features/dashboard/containers";

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/fooditems" component={FoodItems} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
