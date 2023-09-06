import React, { useState } from 'react'
import NavBar from './NavBar'
import Display from './Display'


const Main = () => {
 
    //  const Users = [
                
    //     {
    //         NAME: "Balamurugan",
    //         AGE: 24,
    //         Active: "true"
    //     },
    //     {
    //         NAME: "Balamurugan",
    //         AGE: 24,
    //         Active: "true"
    //     },
    //     {
    //         NAME: "Balamurugan",
    //         AGE: 24,
    //         Active: "true"
    //     },
    //     {
    //         NAME: "Balamurugan",
    //         AGE: 24,
    //         Active: "true"
    //     },
    //     {
    //         NAME: "Balamurugan",
    //         AGE: 24,
    //         Active: "true"
    //     },
    //  ]
           
    //  const [emp, setEmp] = useState({
    //     EmpId: "",
    //     EmpName: ""
    //  })

    //  const updateEmp = (n) => {
    //     setEmp(n)
    //     console.log("From Child" + {n})
    //  }

  return (
    <>
        {/* <Display>
        {
            Users.map((emp)=>{
                // const {NAME, AGE, Active} = emp
                return <NavBar {...emp}/>
            })
        }
        </Display> */}
            <Display updateEmp={updateEmp}/>

            <strong>{emp.EmpId}</strong><hr/>
            <strong>{emp.EmpName}</strong>

    </>
  )
}

export default Main