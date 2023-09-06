import React, { useEffect, useState } from 'react'

const TypesofUseEffect = () => {

const [value, setValue] = useState(0)
const [value1, setValue1] = useState(0)

const handleChange = () => {
    setValue(value + 5)
} 

const handleChange2 = () => {
    setValue1(value1 + 10)
} 

//UseEffect Usage

    //Type:1    
        useEffect(()=>{
            console.log("UseEffect Rendering....")
        })

    // //Type:2   
    //   useEffect(()=>{
    //     console.log("UseEffect Rendering....")
    // },[value])

    // //Type:2   
    //   useEffect(()=>{
    //     console.log("UseEffect Rendering....")
    // },[])

  return (
   <>
      <h2>Value1: {value}</h2>
      <h2>Value2: {value1}</h2>
      <button onClick={()=> handleChange()}>AddValue1: 1</button>  &nbsp; 
      <button onClick={()=> handleChange2()}>AddValue2: 2</button>
   </>
  )
}

export default TypesofUseEffect