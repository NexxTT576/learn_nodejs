// 组件状态 类组件作为演示
import React from "react";
class TestComponent extends React.Component {
  // 1.定义组件状态
  state = {
    // 这里可以定义各种属性 全是当前组件的状态
    name: "cp teacher",
  };
  // 事件回调函数
  changeName = () => {
    // 3.修改state中的状态name
    // 注意：不可以直接做赋值修改 必须通过一个方法 setState
    this.setState({ name: "xxx" });
  };
  render() {
    // 2.使用状态
    return (
      <div>
        this is testComponent 当前name:{this.state.name}
        <button onClick={this.changeName}>修改name</button>
      </div>
    );
  }
}

/**
 * 总结
 * 1.编写组件其实就是编写原生js类或者函数
 * 2.定义状态必须通过state 实例属性的方法 提供一个对象 名称是固定的叫做state
 * 3.修改state中的任何属性 都不可以通过直接赋值 必须走setState方法 这个方法来自于继承得到
 * 4.这里的this关键词 很容易出现指向错误的问题 上面的写法是最推荐和最规范的 没有this指向问题
 * @returns
 */
function App() {
  return (
    <div className="App">
      <TestComponent></TestComponent>
    </div>
  );
}

export default App;
