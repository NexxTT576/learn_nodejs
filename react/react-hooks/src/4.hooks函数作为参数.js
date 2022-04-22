import { useState } from "react";
import "./App.css";

function Counter(props) {
  const [count, setCount] = useState(() => {
    // 这里为了体现初始值经过一定的计算
    // 这个计算比较广义的概念
    // 只要无法直接确定 需要通过一定的操作才能获取 就可以理解为计算
    // return props.count;
    return props.count;
  });
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function App() {
  return (
    <div>
      <Counter count={10}></Counter>
      <Counter count={20}></Counter>
    </div>
  );
}

export default App;
