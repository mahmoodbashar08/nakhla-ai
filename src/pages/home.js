import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <main>
          <h2>Welcome to the Home!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/map">Map</Link>
        </nav>
      </>
    );
  }
}

export default Home;
