// 通过类组件修改状态的方式 counter
import React from "react";
class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: "xx",
      age: 20,
    },
  };
  // class Fields方法没有this
  // react不能直接修改状态
  clickHandler = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // // 数组修改
    // this.setState({
    //   list: [...this.state.list, 4, 5],
    // });
    // // 对象修改
    // this.setState({
    //   person: {
    //     ...this.state.person,
    //     name: "rose",
    //   },
    // });
    // // 合并修改
    // this.setState({
    //   list: [...this.state.list, 4, 5],
    //   person: {
    //     ...this.state.person,
    //     name: "rose",
    //   },
    // });
    // 删除 - filter
    this.setState({
      list: this.state.list.filter((item) => item !== 2),
    });
  };
  // 产出ui模板结构
  render() {
    return (
      <>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>{this.state.person.name}</div>
        <div>
          {this.state.count}
          <button onClick={this.clickHandler}>changeState</button>
        </div>
      </>
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
