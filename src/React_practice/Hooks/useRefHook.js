import React, { useEffect, useRef, useState } from "react";
function UseRefHook() {
  const [name, setName] = useState("");
  const renderCount = useRef();

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  return (
    <div>
      <input
        ref={renderCount}
        value={name}
        onChange={(ele) => setName(ele.target.value)}
      />
      <div>My name is {name}</div>
      {/* <div>This is rendered {renderCount.current} times</div> */}
      <button
        onClick={() => {
          renderCount.current.focus();
        }}
      >
        Click{" "}
      </button>
    </div>
  );
}

export default UseRefHook;
