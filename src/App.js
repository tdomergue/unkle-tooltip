import React from "react";
import Tooltip from "./Tooltip";
import "./styles.css";
import logo from "./unkle_logo.png";
import LogoTooltip from "./LogoTooltip.js";
import InputTooltip from "./InputTooltip.js";
import PasswordInput from "./PasswordInput.js";

const App = () => {
  return (
    <div className="App">
      <h1>Hello, this is a React tooltip demo</h1>
      <p> Try to interact with the elements below </p>

      <div className="wrapper">
        <Tooltip content={<LogoTooltip/>} direction="right">
          <img className="logo" src={logo} alt="Unkle Logo"/>
        </Tooltip>
      </div>

      <div className="wrapper">
        <Tooltip content="To describe!" direction="top">
          <button>I'm a button</button>
        </Tooltip>
      </div>

      <div className="wrapper">
        <Tooltip content="Tell me I'm hired 🙏" direction="top">
          <input className="simple-input" type="text" id="name" name="name" required
          minLength="4" maxLength="8" size="10" placeholder="OF COURSE NOT!"/>
        </Tooltip>
      </div>

      <div className="wrapper">        
        <Tooltip content={<InputTooltip/>} direction="bottom" >
          <PasswordInput />
        </Tooltip>
      </div>

    </div>
  );
}

export default App;