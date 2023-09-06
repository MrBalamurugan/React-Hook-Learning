import React, { useState } from 'react'
import Header from './Header'
import Infor from './Infor'
import Buttons from './Buttons'

const Main = () => {

    const [per, setPer] = useState(0)
    const [pers, setPers] = useState(10)


    const Adds = () =>{
        setPer(()=> per + 5)}

    const Addss = () =>{
        setPers(()=> pers+ 10)}

  return (
   <>
        <Header/>
        <Infor title="Engineering" per={per} />
        <Buttons butname="Add Engg" eventHandler={Adds} />
        <hr/>
        <Infor  title="Diploma" per={pers}/>
        <Buttons butname="Add Dip" eventHandler={Addss} />
        <hr/>
   </>
  )
}

export default Main