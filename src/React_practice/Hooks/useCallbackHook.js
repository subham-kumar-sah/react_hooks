import React, { useCallback, useState } from "react";
import ListCallBack from "./listCallBack";

function UseCallBackHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        Toggle Theme
      </button>
      <ListCallBack getItems={getItems} />
    </div>
  );
}

export default UseCallBackHook;
