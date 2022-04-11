// 类名控制
// 1.新增一个css文件 没有vue的单文件组件 style没有了
// 2.在当前的app.js中导入这个样式文件 让它生效
// 3.通过className指定绑定的类名
import "./app.css";
const isRed = true;
function App() {
  return (
    <div className="App">
      <div className="test">类名测试</div>
      <div className={isRed ? "pro" : "test"}>动态类名控制</div>
    </div>
  );
}

export default App;
