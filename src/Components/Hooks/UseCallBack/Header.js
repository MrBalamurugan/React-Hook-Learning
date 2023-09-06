import React, { memo } from 'react'

const Header = () => {
    console.log("Headers...")
  return (
    <>
        <h3 style={{backgroundColor: "green", height:"50px"}}>Header</h3> 

    </>
  )
}

export default memo(Header)