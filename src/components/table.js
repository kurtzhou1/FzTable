import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import JsonData from "../ticketInfo.json";

class Table extends Component {
  state = {
    bannerNameR: "",
    bannerNameL: "L0",
    column: "C0",
    click: [false, false, false, false, false, false, false],
    test: ""
  };
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

  render() {
    const { bannerNameL, bannerNameR, column, cheapest } = this.state;
    // const data = JsonData[0].detail.map(ele => {
    //   console.log(ele.price);
    // });

    return (
      <React.Fragment>
        <div className="container">
          <div
            className={`slide_btn slide_left ${bannerNameL}`}
            onClick={() => {
              this.clickL();
            }}
          >
            <i className="icon ic-ln"></i>
          </div>
          <div
            className={`slide_btn slide_right ${bannerNameR}`}
            onClick={() => {
              this.clickR();
            }}
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
                <td className={`slide clearfix date2 ${column}`}>
                  {JsonData[0].detail.map((ele, i) => {
                    {
                    }
                    return (
                      <div className={`col col${i + 1}`}>
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
                  <tr>
                    <td>
                      <div className="date">
                        <span>{ele.goDate}</span>
                      </div>
                    </td>
                    <td className={`slide clearfix ${column}`}>
                      {JsonData[k].detail.map((ele, i) => {
                        return (
                          <div
                            className={`col col${i + 1} ${
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
      </React.Fragment>
    );
  }
}

export default Table;
