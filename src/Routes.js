import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Musics from "./musics/Musics";

export const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/musicas" component={Musics} />
      {/* <Route path="/login" component={LoginContainer} /> */}
      {/* <PrivateRoute path="/add" component={AddTaskContainer} /> */}
      {/* <PrivateRoute path="/edit/:_id" component={AddTaskContainer} /> */}
      {/* <PrivateRoute path="/profile" component={ProfileContainer} /> */}
    </div>
  </Router>
);
