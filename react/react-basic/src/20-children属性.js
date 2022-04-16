import React from "react";
function ListItem({ children }) {
  /** */
  // return <div>ListItem,{children}</div>;
  /** */
  // children();
  // return <div>ListItem</div>;
  /** */
  // return <div>ListItem,{children}</div>;
  /** */
  return <div>ListItem,{children.map((child) => child)}</div>;
}

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <ListItem>
          {/* <div>this is child</div> */}
          {/* {() => {
            console.log(123);
          }} */}
          {/* {
            <div>
              <p>{"this is p"}</p>
            </div>
          }  */}
          <div>"this is div"</div>
          <p>{"this is p"}</p>
        </ListItem>
      </div>
    );
  }
}
export default App;
