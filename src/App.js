import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";
import Header from "./components/header_footer/header";
import Featured from "./components/featured";
import VunueInfo from "./components/venueInfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing/index";
import Location from "./components/location/index";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Element name="Event starts In">
          <Featured />
        </Element>

        <Element name="Venue Info">
          <VunueInfo />
        </Element>

        <Element name="Highlights">
          <Highlights />
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
