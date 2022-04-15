import React, { createContext } from "react";
// App->A->C
// App数据->C
const { Provider, Consumer } = createContext();
function ComA() {
  return (
    <div>
      this is ComA<ComC></ComC>
    </div>
  );
}
function ComC() {
  return (
    <div>
      this is ComC
      {/** 通过Consumer使用数据 */}
      <Consumer>{(value) => <span>{value}</span>}</Consumer>
    </div>
  );
}
class App extends React.Component {
  state = {
    message: "this is message",
  };
  render() {
    return (
      // 使用Provider包裹根组件
      <Provider value={this.state.message}>
        <div>
          <ComA></ComA>
        </div>
      </Provider>
    );
  }
}
export default App;
