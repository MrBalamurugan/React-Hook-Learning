
import React, { useReducer } from 'react'

const transcationsReducer = (state, action) =>{
 switch (action.type) {
    case 'WITHDRAW':
            return state - action.payload
    case 'DEPOSIT':
                return state + action.payload
    default:
        return state
 }
}

const UseReducer1 = () => {

const [IniAmount, dispatch] = useReducer(transcationsReducer, 1000)

    const withdrawMpney = (amount) => {
        dispatch({
            type: 'WITHDRAW',
            payload: amount
        })
    }
    const depositMoney = (amount) => {
        dispatch({
            type: 'DEPOSIT',
            payload: amount
        })
    }
  return (
    <>
            <div>
                <h2>{`Balance is ${IniAmount}`}</h2>
                <button onClick={()=>withdrawMpney(500)}>Withdraw</button>
                <button onClick={()=>depositMoney(500)}>Deposit</button>
            </div>
    </>
  )
}

export default UseReducer1

