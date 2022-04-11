/**
 * 有个状态叫做state
 * state:1 <h1>this is h1</h1>
 * state:2 <h2>this is h2</h2>
 */
// const state = 1;
function getH(state) {
  if (state === 1) {
    return <h1>this is h1</h1>;
  } else {
    return <h2>this is h2</h2>;
  }
}
function App() {
  return (
    <div className="App">
      {getH(1)}
      {getH(2)}
    </div>
  );
}

export default App;
