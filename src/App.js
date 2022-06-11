import React, { Component } from "react";
import { Routes } from "./Routes"
  import { ToastContainer } from 'react-toast';

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
