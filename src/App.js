import React, { Component } from "react";

// components
import AuthorList from "./AuthorList";
import Sidebar from "./Sidebar";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10" />
          <AuthorList />
        </div>
      </div>
    );
  }
}

export default App;
