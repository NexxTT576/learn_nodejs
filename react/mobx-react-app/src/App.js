import "./App.css";
import { observer } from "mobx-react-lite";
import { useStore } from "./store/index";
function App() {
  // 注意：解构赋值 到store实例对象就可以了
  // 防止破坏响应式 用哪个store就结构哪个store
  const { counterStore, listStore } = useStore();
  return (
    <div className="App">
      {counterStore.count}
      <button onClick={counterStore.addCount}>+</button>
      <br />
      {listStore.list.join("-")}
      <button onClick={listStore.addList}>+</button>
    </div>
  );
}

export default observer(App);
