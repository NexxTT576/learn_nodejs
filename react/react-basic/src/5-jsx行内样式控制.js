// style行内样式
const divStyle = { color: "blue", fontSize: "30px" };
function App() {
  return (
    <div className="App">
      {/**
       * 这里外层的括号代表要写表达式
       * 内层的括号代表写的一个对象
       */}
      <div style={divStyle}>行内文字测试</div>
    </div>
  );
}

export default App;
