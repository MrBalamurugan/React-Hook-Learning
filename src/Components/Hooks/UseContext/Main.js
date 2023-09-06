
import React, { createContext, useState } from "react";
import ASon from "./SonS/ASon";
import BSon from "./SonS/BSon";
import End from "./SonS/End";

export const bgColor = createContext();

const Main = () => {
  const [color, setColor] = useState("red");

  const handleChange = () => {
    setColor("green");
  };

  return (
    <div>
      <h5>Father Access</h5>
      <button onClick={() => handleChange()}>Change Theme</button>
      <bgColor.Provider value={color}>
        <br />
        <br />
        <ASon />

        <br />
        <BSon />
        <br />
        <End />
      </bgColor.Provider>
    </div>
  );
};

export default Main;
