
import React, { useContext } from "react";
import { bgColor } from "../Main";

const End = () => {
  const color = useContext(bgColor);
  return (
    <div>
      <button style={{ backgroundColor: color, color: "white" }}>Cson</button>
    </div>
  );
};

export default End;

