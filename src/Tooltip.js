import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const [activeTip, setActiveTip] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      console.log("mouseON");
      setActive(true);
    }, props.delay || 400);
  };
  
  const hideTip = () => {
    clearInterval(timeout);
    setTimeout(() => {
      setActive(false);  
      console.log("mouseOFF");
    }, 1000);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      // NB : Components manage their eventHandlers themselves
      onMouseEnter={(props.children.type === "input") || (typeof props.children.type === "function") ? undefined : showTip}
      onMouseLeave={(props.children.type === "input") || (typeof props.children.type === "function") ? undefined : hideTip}
      onFocus={(props.children.type === "input") ? () => setActive(true) : undefined}
      onBlur={(props.children.type === "input") ? () => setActive(false) : undefined}
    >
      {/* Wrapping */}
      {(typeof props.children.type === "function") ? React.cloneElement(props.children, { active: active, setActive: setActive }) : props.children}
      {(active || activeTip) && (
        <div 
          className={`Tooltip-Tip ${props.direction || "top"}`}
          onMouseEnter={() => setActiveTip(true)}
          onMouseLeave={() => setActiveTip(false)}
          >
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
