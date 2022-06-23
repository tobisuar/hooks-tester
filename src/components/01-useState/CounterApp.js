import React, { useState } from 'react'
import "./counter.css"


export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        coutner4:40,
    });

    const {counter1,counter2} = state;
    //console.log(counter)
  return (
    <>
        <h1>Counter1 {counter1}</h1>
        <h1>Counter2 {counter2}</h1>


        <hr/>
        <button className='btn btn-primary'
        onClick={() => {
            setCounter({...state,counter1:counter1+1})
            //setCounter(counter + 1);
        }}
        >
        
        +1
        
        </button>
    </>
  )

}
