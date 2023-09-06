
import React, { useContext } from "react";
import { bgColor } from "../Main";

const ASon = () => {
  const color = useContext(bgColor);

  return (
    <div>
      <button style={{ backgroundColor: color, color: "white" }}>Ason</button>
    </div>
  );
};

export default ASon;
