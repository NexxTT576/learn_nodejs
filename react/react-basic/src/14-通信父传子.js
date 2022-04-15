import React from "react";
// App父组件 Son子组件
// 函数式的Son
function SonF(props) {
  // props 是一个对象 里面存着通过父组件传入的所有数据
  return <div>我是函数子组件,{props.msg}</div>;
}
// 类组件的Son
class SonC extends React.Component {
  render() {
    return <div>我是类子组件,{this.props.msg}</div>;
  }
}
class App extends React.Component {
  // 准备数据
  state = {
    message: "this is message",
  };
  render() {
    return (
      <div>
        {/** 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF msg={this.state.message}></SonF>
        <SonC msg={this.state.message}></SonC>
      </div>
    );
  }
}
export default App;
