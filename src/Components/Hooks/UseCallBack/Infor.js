import React, { memo } from "react";

const Infor = ({ title, per }) => {
  console.log(`Infor ${title}`);

  return (
    <>
      <h1>Course: {title}</h1>
      <h2>Percentage: {per}%</h2>
    </>
  );
};

export default memo(Infor);
