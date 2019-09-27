import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import JsonData from "./ticketInfo.json";

class Table extends Component {
  state = {
    bannerName: null
  };
  click = () => {
    this.setState({});
  };
  render() {
    let new_array = JsonData.map(value => {
      console.log(value.detail[0].price);
    });
    console.log("jsData", JsonData[0].detail);
    // const data = JsonData[0].detail.map(ele => {
    //   console.log(ele.price);
    // });
    const slideClearfix = {
      transform: "translateX(0%)",
      "z-index": "-1"
    };
    const { bannerName } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div className="slide_btn slide_left">
            <i className="icon ic-ln"></i>
          </div>
          <div
            className={`slide_btn slide_right ${bannerName}`}
            onClick={() => {
              this.click();
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
              <div className="slide clearfix" style={slideClearfix}>
                <td>
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
                </td>
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/27(三)</span>
                </div>
              </td>
              <div className="slide clearfix" style={slideClearfix}>
                <td>
                  <div className="col col1">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col2">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col3">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col4">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col5">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col6">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col7">
                    <span></span>
                  </div>
                </td>
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/28(四)</span>
                </div>
              </td>
              <div className="slide clearfix" style={slideClearfix}>
                <td>
                  <div className="col col1">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col2">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col3">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col4">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col5">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col6">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col7">
                    <span></span>
                  </div>
                </td>
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/29(五)</span>
                </div>
              </td>

              <div className="slide clearfix" style={slideClearfix}>
                {JsonData[0].detail.map((ele, i) => {
                  {
                    /* JsonData[0].detail */
                  }
                  // {JsonData.detail[0].price.map((ele, i) => {
                  return (
                    <td>
                      <div className={`col col${i + 1}`}>
                        <span>{ele.price}</span>
                      </div>
                    </td>
                  );
                })}
              </div>
              {/* <div className="slide clearfix" style={slideClearfix}>
                <td>
                  <div className="col col1">
                    <span>111</span>
                  </div>
                </td>
                <td>
                  <div className="col col2">
                    <span>112</span>
                  </div>
                </td>
                <td>
                  <div className="col col3">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col4">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col5">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col6">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col7">
                    <span></span>
                  </div>
                </td>
              </div>
       */}
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/30(六)</span>
                </div>
              </td>
              <div className="slide clearfix" style={slideClearfix}>
                <td>
                  <div className="col col1">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col2">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col3">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col4">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col5">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col6">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col7">
                    <span></span>
                  </div>
                </td>
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>12/31(日)</span>
                </div>
              </td>
              <div className="slide clearfix" style={slideClearfix}>
                <td>
                  <div className="col col1">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col2">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col3">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col4">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col5">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col6">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col7">
                    <span></span>
                  </div>
                </td>
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>01/01(一)</span>
                </div>
              </td>
              <div className="slide clearfix" style={slideClearfix}>
                <td>
                  <div className="col col1">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col2">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col3">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col4">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col5">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col6">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col7">
                    <span></span>
                  </div>
                </td>
              </div>
            </tr>
            <tr>
              <td>
                <div className="date">
                  <span>01/02(二)</span>
                </div>
              </td>
              <div className="slide clearfix" style={slideClearfix}>
                <td>
                  <div className="col col1">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col2">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col3">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col4">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col5">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col6">
                    <span></span>
                  </div>
                </td>
                <td>
                  <div className="col col7">
                    <span></span>
                  </div>
                </td>
              </div>
            </tr>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
