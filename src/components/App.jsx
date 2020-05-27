import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: ["hi there how are you?", "I am fine, and you?"],
    };
  }

  render() {
    var messageNodes = this.state.messages.map((m) => {
      return <div>{m}</div>;
    });

    return <div>{messageNodes}</div>;
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
