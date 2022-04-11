// 条件渲染控制文本的展示
// 条件渲染控制一段模板的展示
const flag = true;
function App() {
  return (
    <div className="App">
      {flag ? "真棒" : "真菜"}
      {flag ? (
        <div>
          <div>header</div>
          <div>main</div>
          <div>footer</div>
        </div>
      ) : (
        " loading"
      )}
    </div>
  );
}

export default App;
