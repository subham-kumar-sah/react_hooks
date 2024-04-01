import React, { useState, useMemo, useEffect } from "react";
import "../styles/hooks.css";

function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //Change on value
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  //Change on reference
  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);
  return (
    <>
      <input
        id="inputField"
        type="number"
        value={number}
        onChange={(ele) => {
          setNumber(parseInt(ele.target.value));
        }}
      />
      <br />
      <button id="buttonStyle" onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <br />
      <div style={themeStyles} id="themeBox">
        {doubleNumber}
      </div>
    </>
  );
}

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default UseMemoHook;
