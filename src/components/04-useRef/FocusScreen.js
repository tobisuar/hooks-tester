import React, { useRef } from 'react';
import "../02-useEfect/effects.css";

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const HandleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }



  return (
    <div>
    
    <h1>FocusScreen</h1>

    <input
    ref ={inputRef}
    className='form-control'
    placeholder='su nombre'/>

    <button className='btn btn-outline-primary mt-4'
    onClick={HandleClick}
    >Focus</button>
    
    
    
    </div>
  )
}
