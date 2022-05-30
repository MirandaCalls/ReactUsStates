import { useState } from "react";
import UsStatesGraphics from "./us_states_graphics.json";

import "./StatesMap.css";

// https://stackoverflow.com/questions/61944964/how-do-you-use-an-svg-inline-in-react-using-parcel-2
const StatesMap = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const onStateMouseEnter = (id, name) => {
    setShowTooltip(true);
    setTooltipText(name);
  };

  const onStateMouseLeave = () => {
    setShowTooltip(false);
  };

  const updateMousePosition = (e) => {
    setMouseX(e.clientX + 10);
    setMouseY(e.clientY + 14);
  };

  let state_paths = UsStatesGraphics.map((state) => {
    return (
      <path
        key={state.id}
        id={state.id}
        data-name={state["data-name"]}
        data-id={state["data-id"]}
        d={state.d}
        onMouseMove={updateMousePosition}
        onMouseEnter={() => onStateMouseEnter(state.id, state["data-name"])}
        onMouseLeave={onStateMouseLeave}
      />
    );
  });

  return (
    <div>
      <svg id="us_map" viewBox="0 0 900 589">
        {state_paths}
      </svg>
      {showTooltip ? (
        <div
          id="tooltip"
          className="tooltip"
          style={{
            top: mouseY + "px",
            left: mouseX + "px",
          }}
        >
          {tooltipText}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StatesMap;
