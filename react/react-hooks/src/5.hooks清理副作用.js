import { useEffect, useState } from "react";
import "./App.css";

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("定时器执行");
    }, 1000);
    return () => {
      // 清理计时
      clearInterval(timer);
    };
  }, []);
  return <div>this is Test</div>;
}

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {flag ? <Test></Test> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  );
}

export default App;
