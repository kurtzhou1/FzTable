import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Date from "./components/dataInfo.json";
import Table from "./components/table";
import "./components/index.scss";

class Fztable extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className="colume">
          <h2 className="title">低價月曆</h2>
        </div>
        <Table />
      </React.Fragment>
    );
  }
}

window.banner = ReactDOM.render(<Fztable />, document.getElementById("root"));

serviceWorker.unregister();
