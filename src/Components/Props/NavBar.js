import React from 'react'

const NavBar = ({NAME, AGE, Active}) => {
  return (
    <>
        <div>Data from REST API:</div>
        <h5>Name: {NAME} </h5>
        <p>Age: {AGE}</p>
        <p>Active: {Active}</p>
        
    </>
  )
}

export default NavBar