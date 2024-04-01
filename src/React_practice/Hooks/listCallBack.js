import React, { useEffect, useState } from "react";
function ListCallBack({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
  }, [getItems]);
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default ListCallBack;
