import { useEffect, useState } from "react";

function UseEffectHook() {
  const [showWidth, setShowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setShowWidth(window.innerWidth);
      });
    };
  }, [showWidth]);
  return (
    <>
      <h1>{showWidth}</h1>
    </>
  );
}

export default UseEffectHook;
