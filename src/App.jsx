import { render } from "react-dom";
import StatesMap from "./StatesMap.jsx";

import "./App.css";

const App = () => {
  return <StatesMap />;
};

render(<App />, document.getElementById("root"));
