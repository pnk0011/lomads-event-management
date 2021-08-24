import React from "react";

import NavBar from "../nav-bar";
import Partner from "./partner";
import Footer from "../footer";

class Raison extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <Partner />
      </div>
    );
  }
}

export default Raison;
