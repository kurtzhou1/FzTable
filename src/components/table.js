import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import JsonData from "../ticketInfo.json";

class Table extends Component {
  state = {
    bannerNameR: "",
    bannerNameL: "L0",
    column: "C0"
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
                      <div className={`col col${i + 1}`}>
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
                      <div className={`col col${i + 1}`}>
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
                      <div className={`col col${i + 1}`}>
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
                      <div className={`col col${i + 1}`}>
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
                      <div className={`col col${i + 1}`}>
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
                  <span>01/01(一)</span>
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
                      <div className={`col col${i + 1}`}>
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
                      <div className={`col col${i + 1}`}>
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

{
  /* <td>
                  <div className="col col1">
                    <div className="date2">
                      <span>12/30(六)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col col2">
                    <div className="date2">
                      <span>12/31(日)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col col3">
                    <div className="date2">
                      <span>01/01(一)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col col4">
                    <div className="date2">
                      <span>01/02(二)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col col5">
                    <div className="date2">
                      <span>01/03(三)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col col6">
                    <div className="date2">
                      <span>01/04(四)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col col7">
                    <div className="date2">
                      <span>01/05(五)</span>
                    </div>
                  </div>
                </td> */
}
