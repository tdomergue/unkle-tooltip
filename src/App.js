import React from "react";
import Tooltip from "./Tooltip";
import "./styles.css";
import logo from "./unkle_logo.png";
import LogoContent from "./LogoContent.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello, this is a React tooltip demo</h1>
      <p> Try to interact with the elements below </p>

      <div className="wrapper">
        <Tooltip content={<LogoContent/>}>
          <img className="logo" src={logo} alt="Unkle Logo"/>
        </Tooltip>
      </div>

      <div className="wrapper">
        <Tooltip content="Quack!" direction="top">
          <button>I'm a button</button>
        </Tooltip>
      </div>

      <div className="wrapper">
        <Tooltip content="Yes!" direction="top">
          <input type="text" id="name" name="name" required
          minLength="4" maxLength="8" size="10" />
        </Tooltip>
      </div>

    </div>
  );
}
