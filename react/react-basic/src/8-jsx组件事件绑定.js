import React from "react";

class HelloC extends React.Component {
  clickHandler = () => {
    console.log("click触发");
  };
  render() {
    return <button onClick={this.clickHandler}>click</button>;
  }
}
function App() {
  function handler(e) {
    console.log(e);
    // 阻止默认事件
    e.preventDefault();
    console.log("click事件触发");
  }
  return (
    <div className="App">
      <button onClick={handler}>click me</button>
      <HelloC></HelloC>
    </div>
  );
}

export default App;
