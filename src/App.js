import React from "react";
import Navbar from "./commonComponents/navbar";
import {BrowserRouter,Route,Link} from 'react-router-dom'
import "./App.css";

import Users from './features/users/containers'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route path='/users' component={Users}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
