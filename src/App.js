import React from "react";
import Navbar from "./commonComponents/navbar";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Users from './features/users/containers/form'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
    <Users/>

      <Navbar />
    </div>
  );
}

export default App;
