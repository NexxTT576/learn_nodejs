import React from "react";
class Counter extends React.Component {
  // 1.声明用来控制input value的react组件自己的状态
  state = {
    message: "this is message",
  };
  // 回调函数
  inputChange = (e) => {
    console.log("change 事件触发");
    // 4.拿到输入框最新的值 交给state中的message
    this.setState({
      message: e.target.value,
    });
  };
  // 产出UI模板结构
  render() {
    return (
      // 2.给input框的value属性绑定 react state
      // 3.给input框绑定一个change的事件 为了拿到当前输入框的数据
      <input
        type="text"
        value={this.state.message}
        onChange={this.inputChange}
      ></input>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/**渲染Counter */}
      <Counter></Counter>
    </div>
  );
}

export default App;
