const name = "测试";
function getAge() {
  return 18;
}
function App() {
  return (
    <div className="App">
      react app
      {name},age {getAge()},{1 + 2}
    </div>
  );
}

export default App;
