import React, { Component } from "react";
import "./index.scss";
import JsonData from "../ticketInfo.json";
// import styled from "styled-components";

class Table extends Component {
  state = {
    bannerNameR: "",
    bannerNameL: "L0",
    column: "C0",
    click: [false, false, false, false, false, false, false],
    test: "",
    showNow: ["sN1", "sN2", "sN3", "sN4", "sN5", "sN6", "sN7", ""],
    slideNow: ["sL1", "sL2", "SL3", "SL4", "SL5", "SL6", "SL7"]
  };
  componentDidMount() {
    const l = this.props.count.show - 1;
    const M = this.props.count.slide - 1;
    this.setState({
      showNow: this.state.showNow[l],
      slideNow: this.state.slideNow[M]
    });
  }
  clickR = () => {
    const { column } = this.state;
    if (column === "C0") {
      this.setState({
        bannerNameR: "R1",
        column: "C1",
        bannerNameL: "L1"
      });
    } else {
      this.setState({
        bannerNameR: "R2",
        column: "C2"
      });
    }
    this.whenTransition();
  };
  clickL = () => {
    const { column } = this.state;
    if (column === "C1") {
      this.setState({
        bannerNameL: "L0",
        column: "C0"
      });
    } else {
      this.setState({
        bannerNameR: "R1",
        column: "C1"
      });
    }
    this.whenTransition();
  };

  clickRow = j => {
    this.setState({
      click: { [j]: true }
    });
  };

  clickColumn = i => {
    this.setState({
      test: { [i]: true }
    });
  };
  whenTransition = () => {
    let timesRun = 0;
    let interval = setInterval(() => {
      timesRun += 1;
      this.whenClickCallback();
      if (timesRun === this.props.speed * 10) {
        clearInterval(interval);
      }
    }, 1);
  };

  whenClickCallback = () => {
    console.log("whenClickCallback");
  };

  render() {
    const { bannerNameL, bannerNameR, column, showNow, slideNow } = this.state;
    return (
      <>
        <div className="container">
          <div
            className={`slide_btn slide_left ${bannerNameL}`}
            onClick={this.clickL}
          >
            <i className="icon ic-ln"></i>
          </div>
          <div
            className={`slide_btn slide_right ${bannerNameR}`}
            onClick={this.clickR}
          >
            <i className="icon ic-ln"></i>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <div className="title2">
                    <span>回程</span>
                    <span>去程</span>
                  </div>
                </td>
                <td
                  className={`slide clearfix date2 ${column} ${slideNow}`}
                  style={{ transition: this.props.speed + "s" }}
                >
                  {JsonData[0].detail.map((ele, i) => {
                    return (
                      <div key={ele.backDate+ele.price} className={`col col${i + 1} ${showNow}`}>
                        <span>{ele.backDate}</span>
                        <div
                          className={`${
                            ele.backDate === "01/01(一)" ? "year" : ""
                          }`}
                        >
                          2018
                        </div>
                      </div>
                    );
                  })}
                </td>
              </tr>
              {JsonData.map((ele, k) => {
                return (
                  <tr key={ele.goDate+k}>
                    <td>
                      <div className="date">
                        <span>{ele.goDate}</span>
                      </div>
                    </td>
                    <td
                      className={`slide clearfix ${column} ${slideNow}`}
                      style={{ transition: this.props.speed + "s" }}
                    >
                      {JsonData[k].detail.map((ele, i) => {
                        return (
                          <div key={ele.backDate+ele.price+i}
                            className={`col col${i + 1} ${showNow} ${
                              this.state.click[k] ? "open1" : null
                            } ${this.state.test[i] ? "open2" : null}`}
                            onClick={() => {
                              this.clickRow(k);
                              this.clickColumn(i);
                            }}
                          >
                            <div
                              className={`${ele.cheapest ? "cheapest" : ""}`}
                            ></div>
                            <div
                              className={`${ele.cheapest ? "cheapestw" : ""}`}
                            >{`${ele.cheapest ? "最便宜" : ""}`}</div>
                            <span>{ele.price}</span>
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Table;
