import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import "../02-useEfect/effects.css";


export const RealSampleRef = () => {

    const [show, setshow] = useState()


  return (
    <div>

    RealSampleRef
    <hr/>

    {show && <MultipleCustomHooks/>}
    <button className='btn btn-primary mt-5'
    onClick={()=> setshow(!show) }>show/hide</button>
    
    </div>
  )
}
