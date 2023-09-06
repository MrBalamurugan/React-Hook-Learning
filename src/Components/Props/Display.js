import React, { useState } from 'react'

const Display = (props) => {
    
const [emp, setEmp] = useState({
    EmpId: "1",
    EmpName: "BalaMurugan"
});
const handleSend = (e) => {
    e.preventDefault()
    props.updateEmp(emp)
}
  return (
    <div>
            <button onClick={handleSend}>Send Child to Parent</button>
    </div>
  )
}

export default Display