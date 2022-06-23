import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import "./counter.css";

export const CounterWithCustomHook = () => {

    const {first,increment,decrement,reset} = useCounter(100);


  return (
    <>
        <h1>Counter with hook : {first}</h1>
        <hr/>

        <button onClick={increment} className='btn'>+1</button>
        <button onClick={decrement} className='btn'>-1</button>
        <button onClick={reset} className="btn">Reset</button>
    </>
  )
}
