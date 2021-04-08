import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const [activeTip, setActiveTip] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    setTimeout(() => {
      clearInterval(timeout);
      setActive(false);  
    }, 1000);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={(props.children.type === "input") ? undefined : showTip}
      onMouseLeave={(props.children.tye === "input") ? undefined : hideTip}
      onClick={(props.children.type === "input") ? () => setActive(true) : undefined}
    >
      {/* Wrapping */}
      {props.children}
      {console.log(props.children)}
      {(active || activeTip) && (
        <div 
          className={`Tooltip-Tip ${props.direction || "top"}`}
          onMouseEnter={() => setActiveTip(true)}
          onMouseLeave={() => setActiveTip(false)}
          >
          {/* Content */}
          {console.log(props.content)}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
