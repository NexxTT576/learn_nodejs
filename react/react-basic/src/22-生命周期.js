import React from "react";
import PropTypes from "prop-types";

class Test extends React.Component {
  timer = null;
  componentDidMount() {
    // console.log("componentDidMount");
    this.timer = setInterval(() => {
      console.log("定时器开启");
    }, 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    return <div>test</div>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    count: 0,
    flag: true,
  };

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        this is div
        {this.state.flag ? <Test></Test> : null}
        {<button onClick={this.clickHandler}>{this.state.count}</button>}
      </div>
    );
  }
}
export default App;
