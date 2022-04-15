import React from "react";

function Son(props) {
  const { getSonMsg } = props;
  return (
    <div>
      this is son{" "}
      <button
        onClick={() => {
          getSonMsg("这里是来自子组件中的数据");
        }}
      >
        click
      </button>
    </div>
  );
}
class App extends React.Component {
  // 准备数据
  state = {
    list: [1, 2, 3],
  };
  // 准备一个函数传给子组件
  getSonMsg = (msg) => {
    console.log(msg);
  };
  render() {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg}></Son>
      </div>
    );
  }
}
export default App;
