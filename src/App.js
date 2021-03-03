import React from "react";
import { Todos } from "./views/Todos";
import "./App.css";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <button onClick={() => localStorage.removeItem("user")}>logout</button>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <PrivateRoute path="/todo" component={Todos} />
        <Route path="/">
          <h1>hey</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
