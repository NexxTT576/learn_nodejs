import "./App.css";
import { counterStore } from "./store/counter";
// 导入中间件 连接mobx react 完成响应式变化
import { observer } from "mobx-react-lite";
function App() {
  return (
    <div className="App">
      {/**把store中的count渲染一下 */}
      {counterStore.count}
      <br />
      {/**点击事件触发action函数修改count值 */}
      <button onClick={counterStore.addCount}>+</button>
      <br />
      {/**使用计算属性 */}
      {counterStore.filterList.join("-")}
      <button onClick={counterStore.addList}>修改数组</button>
    </div>
  );
}

export default observer(App);
