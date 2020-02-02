import React from 'react';
import Navbar from './commonComponents/navbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Users from './features/users/containers';
import FoodItem from './features/foodItems/containers';
import Dashboard from './features/dashboard/containers';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route path="/dashboard" component={Dashboard} exact />

            <Route path="/users" component={Users} exact />
            <Route path="/users/:id" component={Users} exact />

            <Route path="/fooditems" component={FoodItem} exact />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
