import React, { createContext, useContext, useState } from "react";
import "./App.css";

const Context = createContext();
function ComA() {
  const count = useContext(Context);
  return (
    <div>
      this is ComA
      <br />
      app传过来的数据为:{count}
      <ComC></ComC>
    </div>
  );
}

function ComC() {
  const count = useContext(Context);
  return (
    <div>
      this is ComC
      <br />
      app传过来的数据为:{count}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={count}>
      <div>
        <ComA></ComA>
        <button onClick={() => setCount(count + 20)}>click</button>
      </div>
    </Context.Provider>
  );
}

export default App;
