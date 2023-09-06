import React, { memo } from "react";

const Buttons = ({ butname, eventHandler }) => {
  console.log(`Buttons...${butname}`);

  return (
    <>
      <button onClick={eventHandler}>{butname}</button>
    </>
  );
};

export default memo(Buttons);
