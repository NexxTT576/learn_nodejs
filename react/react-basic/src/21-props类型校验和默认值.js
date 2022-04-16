import React from "react";
import PropTypes from "prop-types";

const List = ({ colors, pageSize = 10 }) => {
  console.log(pageSize);
  const arr = colors;
  const lis = arr.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{lis}</ul>;
};

List.propTypes = {
  colors: PropTypes.array,
};
// List.defaultProps = {
//   pageSize: 10,
// };

class ListC extends React.Component {
  static defaultProps = {
    pageSize: 20,
  };
  render() {
    return <div>{this.props.pageSize}</div>;
  }
}
class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <List colors={[4, 5, 6]} pageSize={20}></List>
      </div>
    );
  }
}
export default App;
