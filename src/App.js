import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AddRecipe from "./components/AddRecipe";
import axios from "axios";
import Home from "./components/Home";
import { Button } from "reactstrap";


function App() {
  return (
    <div className="App Container">
      <Switch>
        <Route exact path={`/`}>
          <Home />
        </Route>
        <Route path={`/add`}>
          <AddRecipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
