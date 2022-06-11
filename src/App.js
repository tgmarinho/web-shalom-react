import React, { Component } from "react";
import { Routes } from "./Routes"
  import { ToastContainer } from 'react-toast';

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <ToastContainer delay={3000} />
      </div>
    );
  }
}

export default App;
