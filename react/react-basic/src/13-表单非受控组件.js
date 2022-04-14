import React, { createRef } from "react";
class Counter extends React.Component {
  // 这个实例属性是可以自定义的 语义化即可
  msgRef = createRef();
  getValue = () => {
    // 通过msgRef获取input value值
    console.log(this.msgRef.current.value);
  };
  // 产出UI模板结构
  render() {
    return (
      <>
        <input type="text" ref={this.msgRef}></input>
        <button onClick={this.getValue}>点击获取输入框的值</button>
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
