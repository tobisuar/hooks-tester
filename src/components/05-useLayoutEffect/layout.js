import React, { useLayoutEffect, useRef,useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import"../05-useLayoutEffect/Layout.css";
import { useCounter } from '../../hooks/useCounter'

export const Layout = () => {

    const {counter,increment} = useCounter(1);
  
  const {data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
  //console.log(state); //transforma el valor en un falso y da el valor usando && 
    const {quote} = !!data && data[0];

    const qtag = useRef()
    const [BoxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
      
        setBoxSize(qtag.current.getBoundingClientRect());
      
    }, [quote]);
  
    return (
    <div>
        <h1>Layout Effect</h1>
        <hr/>


                    <div className='alert alert-info text-center'>Loading...</div>

                    <blockquote className='blockquote text-right'>
                        <p className='mb-0' ref={qtag}>{quote}</p>

                    </blockquote>
                    <pre> {JSON.stringify(BoxSize,null,3)}</pre>

        <button className='btn btn-primary' onClick={increment}>Siguiente quote</button>
    </div>
  )
}
