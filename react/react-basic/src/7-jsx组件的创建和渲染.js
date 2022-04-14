import "./app.css";
import React from "react";
// 函数组件的创建和渲染
// 写一个首字母大写的函数然后再函数体中return中出去UI的结构(jsx)
function HelloComponent() {
  return <div>hello</div>;
}
// 类组件class
class HelloC extends React.Component {
  // 必须提供一个render方法
  // 在这个方法中return UI结构
  render() {
    return <div>这里是hello类组件</div>;
  }
}

function App() {
  return (
    <div className="App">
      {/*渲染hello组件 */}
      <HelloComponent />
      <HelloComponent></HelloComponent>
      {/*渲染类hello组件 */}
      <HelloC />
      <HelloC></HelloC>
    </div>
  );
}

export default App;
