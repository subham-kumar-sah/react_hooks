import React, { useContext } from "react";
import { ThemeContext } from "./producerCode";

function UseContextConsumer() {
  const { darkTheme, arr } = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    margin: "2rem",
    padding: "2rem",
    width: "200px",
  };
  return (
    <>
      <div style={themeStyles}>Function Theme</div>
      {arr.map((ele) => {
        return (
          <div key={ele} style={themeStyles}>
            {ele}
          </div>
        );
      })}
    </>
  );
}

export default UseContextConsumer;
