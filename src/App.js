import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigator from "./Navigator";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Calendar from "./Calendar";
import Photos from "./Photos";
import Map from "./Map";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigator />
            <Header />
            <About />
            <Services />
            <Calendar />
            <Photos />
            <Map />
            <Footer />

            {/* <Route exact path="/" component={App} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
