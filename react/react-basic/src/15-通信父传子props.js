import React from "react";
// App父组件 Son子组件
// 函数式的Son
function SonF(props) {
  // props 是一个对象 里面存着通过父组件传入的所有数据
  return (
    <div>
      我是函数子组件,
      {props.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
      {props.userInfo.name}
      {props.userInfo.age}
      <button onClick={props.getMes}>触发父组件传入函数</button>
      {props.child}
    </div>
  );
}
// 这里写的就是原生的函数语法 props也是一个普通的js对象
// 所以原生支持的写法 这里都是可以的 放心大胆的写
class App extends React.Component {
  // 准备数据
  state = {
    list: [1, 2, 3],
    userInfo: {
      name: "cp",
      age: 10,
    },
  };
  getMes = () => {
    console.log("父组件中的函数");
  };
  render() {
    return (
      <div>
        <SonF
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMes={this.getMes}
          child={<span>this is span</span>}
        ></SonF>
        {/* <SonC msg={this.state.message}></SonC> */}
      </div>
    );
  }
}
export default App;
