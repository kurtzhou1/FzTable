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
    if (j === 0) {
      this.setState({
        click: [true, false, false, false, false, false, false]
      });
    } else if (j === 1) {
      this.setState({
        click: [false, true, false, false, false, false, false]
      });
    } else if (j === 2) {
      this.setState({
        click: [false, false, true, false, false, false, false]
      });
    } else if (j === 3) {
      this.setState({
        click: [false, false, false, true, false, false, false]
      });
    } else if (j === 4) {
      this.setState({
        click: [false, false, false, false, true, false, false]
      });
    } else if (j === 5) {
      this.setState({
        click: [false, false, false, false, false, true, false]
      });
    } else if (j === 6) {
      this.setState({
        click: [false, false, false, false, false, false, true]
      });
    }
  };

  clickColumn = i => {
    if (i === 0) {
      this.setState({
        test: [true, false, false, false, false, false, false]
      });
    } else if (i === 1) {
      this.setState({
        test: [false, true, false, false, false, false, false]
      });
    } else if (i === 2) {
      this.setState({
        test: [false, false, true, false, false, false, false]
      });
    } else if (i === 3) {
      this.setState({
        test: [false, false, false, true, false, false, false]
      });
    } else if (i === 4) {
      this.setState({
        test: [false, false, false, false, true, false, false]
      });
    } else if (i === 5) {
      this.setState({
        test: [false, false, false, false, false, true, false]
      });
    } else if (i === 6) {
      this.setState({
        test: [false, false, false, false, false, false, true]
      });
      console.log("it's test");
    }
  };

  // cheapest = () => {
  //   // for (let i = 0; i < 7; i++) {
  //   let new_array = JsonData[0].detail.map(value => {
  //     console.log("AAA", value.cheapest);
  //     if (value.cheapest) {
  //       this.setState({
  //         cheapest: "cheapest"
  //       });
  //     }
  //   });
  //   // }
  // };

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
            <tr>
              <td>
                <div className="title2">
                  <span>回程</span>
                  <span>去程</span>
                </div>
              </td>
              <div className={`slide clearfix date2 ${column}`}>
                {JsonData[0].detail.map((ele, i) => {
                  {
                  }
                  return (
                    <td>
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
                    </td>
                  );
                })}
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/27(三)</span>
                </div>
              </td>
              <div className={`slide clearfix ${column}`}>
                {JsonData[0].detail.map((ele, i) => {
                  {
                    /* JsonData[0].detail */
                  }
                  // {JsonData.detail[0].price.map((ele, i) => {
                  return (
                    <td>
                      <div
                        className={`col col${i + 1} ${
                          this.state.click[0] ? "open1" : null
                        } ${this.state.test[i] ? "open2" : null}`}
                        onClick={() => {
                          this.clickRow(0);
                          this.clickColumn(i);
                        }}
                      >
                        <div
                          className={`${ele.cheapest ? "cheapest" : ""}`}
                        ></div>
                        <span>{ele.price}</span>
                      </div>
                    </td>
                  );
                })}
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/28(四)</span>
                </div>
              </td>
              <div className={`slide clearfix ${column}`}>
                {JsonData[1].detail.map((ele, i) => {
                  {
                    /* JsonData[0].detail */
                  }
                  // {JsonData.detail[0].price.map((ele, i) => {
                  return (
                    <td>
                      <div
                        className={`col col${i + 1} ${
                          this.state.click[1] ? "open1" : null
                        } ${this.state.test[i] ? "open2" : null}`}
                        onClick={() => {
                          this.clickRow(1);
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
                    </td>
                  );
                })}
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/29(五)</span>
                </div>
              </td>

              <div className={`slide clearfix ${column}`}>
                {JsonData[2].detail.map((ele, i) => {
                  {
                    /* JsonData[0].detail */
                  }
                  // {JsonData.detail[0].price.map((ele, i) => {
                  return (
                    <td>
                      <div
                        className={`col col${i + 1} ${
                          this.state.click[2] ? "open1" : null
                        } ${this.state.test[i] ? "open2" : null}`}
                        onClick={() => {
                          this.clickRow(2);
                          this.clickColumn(i);
                        }}
                      >
                        <div
                          className={`${ele.cheapest ? "cheapest" : ""}`}
                        ></div>
                        <span>{ele.price}</span>
                      </div>
                    </td>
                  );
                })}
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/30(六)</span>
                </div>
              </td>
              <div className={`slide clearfix ${column}`}>
                {JsonData[3].detail.map((ele, i) => {
                  {
                    /* JsonData[0].detail */
                  }
                  // {JsonData.detail[0].price.map((ele, i) => {
                  return (
                    <td>
                      <div
                        className={`col col${i + 1} ${
                          this.state.click[3] ? "open1" : null
                        } ${this.state.test[i] ? "open2" : null}`}
                        onClick={() => {
                          this.clickRow(3);
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
                    </td>
                  );
                })}
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/31(日)</span>
                </div>
              </td>
              <div className={`slide clearfix ${column}`}>
                {JsonData[4].detail.map((ele, i) => {
                  {
                    /* JsonData[0].detail */
                  }
                  // {JsonData.detail[0].price.map((ele, i) => {
                  return (
                    <td>
                      <div
                        className={`col col${i + 1} ${
                          this.state.click[4] ? "open1" : null
                        } ${this.state.test[i] ? "open2" : null}`}
                        onClick={() => {
                          this.clickRow(4);
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
                    </td>
                  );
                })}
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>01/01(一)</span>
                  <div className="year">2018</div>
                </div>
              </td>
              <div className={`slide clearfix ${column}`}>
                {JsonData[5].detail.map((ele, i) => {
                  {
                    /* JsonData[0].detail */
                  }
                  // {JsonData.detail[0].price.map((ele, i) => {
                  return (
                    <td>
                      <div
                        className={`col col${i + 1} ${
                          this.state.click[5] ? "open1" : null
                        } ${this.state.test[i] ? "open2" : null}`}
                        onClick={() => {
                          this.clickRow(5);
                          this.clickColumn(i);
                        }}
                      >
                        <div
                          className={`${ele.cheapest ? "cheapest" : ""}`}
                        ></div>
                        <span>{ele.price}</span>
                      </div>
                    </td>
                  );
                })}
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>01/02(二)</span>
                </div>
              </td>
              <div className={`slide clearfix ${column}`}>
                {JsonData[6].detail.map((ele, i) => {
                  {
                    /* JsonData[0].detail */
                  }
                  // {JsonData.detail[0].price.map((ele, i) => {
                  return (
                    <td>
                      <div
                        className={`col col${i + 1} ${
                          this.state.click[6] ? "open1" : null
                        } ${this.state.test[i] ? "open2" : null}`}
                        onClick={() => {
                          this.clickRow(6);
                          this.clickColumn(i);
                        }}
                      >
                        <div
                          className={`${ele.cheapest ? "cheapest" : ""}`}
                        ></div>
                        <span>{ele.price}</span>
                      </div>
                    </td>
                  );
                })}
              </div>
            </tr>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
