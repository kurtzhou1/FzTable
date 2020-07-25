import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/table";
import "./components/index.scss";

class Fztable extends React.Component {
  componentDidMount() {}
  render() {
    const props = {
      count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 1, // [number]
        // M版時一個畫面show幾格儲存格
        show: 2 // [number]
      },
      // 設定花多久時間移動完成
      speed: 0.3, // [number]
      // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
      whenClick: function($element) {
      }
    };

    return (
      <>
        <div className="colume">
          <h2 className="title">低價月曆</h2>
        </div>
        <Table {...props} />
      </>
    );
  }
}

window.banner = ReactDOM.render(<Fztable />, document.getElementById("root"));