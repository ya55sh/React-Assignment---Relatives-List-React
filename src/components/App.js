import React, { Component, useState } from "react";
import "../styles/App.css";
const relativeList = ["Yash", "Raaj", "Films"];

// const numbers = [1, 2, 3, 4, 5];
let counter = 1;
const listItems = relativeList.map((rlist,index) => (
  <li key={"relativeListItem" + (index+1)}> {rlist}</li>
));
class App extends Component {
  render() {
    return <div id="main"><ol>{listItems}</ol></div>;
  }
}

export default App;
