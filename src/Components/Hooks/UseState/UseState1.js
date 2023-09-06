

import React, { useState } from 'react'

const UseState1 = () => {

    const [initial, setInitial] = useState({value: 10, Code: "1234"});

    const handleIncrement = () =>{
        setInitial((preValue) =>{
            return {value:preValue.value + 1}
        })
      
        console.log("Increment")
    }
    const handleDecrement = ()=>{
        setInitial((preValue)=> {
            return {value:preValue.value - 1}
        })
        console.log("Decrement")
    }

  return (
  <>  <div style={{display: "flex", flexDirection: "row", gap: 15, alignItems: "center", justifyContent: "center"}}>
        <button onClick={()=> handleIncrement()}>Incre</button>
        <h1>{initial.value}</h1>
        <button onClick={()=> handleDecrement()}>Decre</button>
     </div>
  </>
  )
}

export default UseState1

