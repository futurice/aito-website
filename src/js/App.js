import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <Button title="Hello"/>
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
