import React from "react";
import ReactDom from "react-dom";

function App(){ 
  return <p>Hello, This is my first app using ReactDom.</p>;
}

ReactDom.render(<App />, document.getElementById("root"));


