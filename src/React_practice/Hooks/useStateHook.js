import { useState } from "react";
import "../styles/hooks.css";

function UseStateHooks() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    //Wrong way to decrement
    //setCount(count - 1);
    //Correct way to decrement
    setCount((prevCount) => prevCount - 1);
  };
  const incrementCount = () => {
    //Wrong way to increment
    //setCount(count + 1);
    //Correct way to increment
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="positionStyle">
      <button className="buttonStyle" onClick={decrementCount}>
        -
      </button>
      <span id="valueStyle"> {count} </span>
      <button className="buttonStyle" onClick={incrementCount}>
        +
      </button>
    </div>
  );
}

export default UseStateHooks;
