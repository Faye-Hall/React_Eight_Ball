import React from "react";

//import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Eight_Ball from "./Eight_Ball";

function App() {
  return (
    <React.Fragment>
      <div className="main-div">
        <Eight_Ball />
      </div>
    </React.Fragment>
  );
}

export default App;
