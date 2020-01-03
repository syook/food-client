import React from 'react';
import Navbar from './commonComponents/navbar';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Users from './features/users/containers';
import FoodItems from './features/foodItems/containers';
import Dashboard from './features/dashboard/containers';

import 'semantic-ui-css/semantic.min.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/dashboard" component={Dashboard} exact />
					<Route path="/users" component={Users} exact />

					<Route path="/fooditems" component={FoodItems} exact />
					<Route path="/fooditems/:id" component={FoodItems} exact />
					<Route path="/users/:id" component={Users} exact />

				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
