import React, { useMemo, useState } from "react";

const UseMemoiz = () => {
  const [intial, setInitial] = useState(0);
  const [add, setAdd] = useState([]);

  const AddItem = () => {
    console.log("Add items");
    setAdd((todos) => [...todos, "New Todos"]);
  };

  const Increment = () => {
    console.log("increment");
    setInitial((pre) => pre + 1);
  };

  const Expensives = (num) => {
    console.log("Expensive");
    for (let i = 0; i <= 10000000; i++) {
      num += i;
    }
    return num;
  };

  const Datas = useMemo(()=>Expensives(intial), [intial]);

  return (
    <>
      <h3>Simple Calculation</h3>

      <h4>{intial}</h4>
      <button onClick={() => Increment()}>+</button>
      <br />
      <br />
      <h3>Todo List App</h3>
      <br />
      <button onClick={() => AddItem()}>Add List</button>
      <br />
      <br />
      {add.map((ad, index) => {
        return <h5 key={index}>{ad}</h5>;
      })}

      <h3>Expensive Process: {}</h3>
      {Datas}
    </>
  );
};

export default UseMemoiz;
