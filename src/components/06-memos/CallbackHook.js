import React,{useCallback, useEffect, useState} from 'react';
import { ShowIncrement } from './ShowIncrement';
import "../02-useEfect/effects.css";



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }
    const increment = useCallback((num) => {setCounter(c => c + num)},[setCounter])

    useEffect(() => {
        /// ??? 
    } ,[increment]);

  return (
    <div>
    <h1> useCallback Hook : {counter}</h1>
    <hr/>

    <ShowIncrement increment={increment}/>
    </div>

  )
}
