const list = [
  {
    name: "test1",
    id: 1,
  },
  {
    name: "test2",
    id: 2,
  },
  {
    name: "test3",
    id: 3,
  },
];
function App() {
  return (
    <div className="App">
      {/* 完成列表遍历 map*/}
      {/* 在map方法的回调函数中返回重复渲染的内容(标签)*/}
      {/* item拿到数组中的每一项，然后通过再次使用{}渲染具体的内容*/}
      {/* 同样需要加一个独一无二不可重复类型为字符串或者number的key */}
      {/* 这个key不会出现在真实的dom中 只是为了配合diff算法复用 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
