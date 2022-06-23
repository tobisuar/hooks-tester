import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import"../02-useEfect/effects.css"
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);
  
  const {loading,data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
  //console.log(state); //transforma el valor en un falso y da el valor usando && 
    const {author,quote} = !!data && data[0];

  
  
    return (
    <div>
        <h1>BreakingBad Quotes</h1>
        <hr/>

        {
            loading 
            ?
                (
                    <div className='alert alert-info text-center'>Loading...</div>
                )
            :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{quote}</p>
                        <footer className='blockquote-footer' >{author}</footer>

                    </blockquote>
                )
        } 
        <button className='btn btn-primary' onClick={increment}>Siguiente quote</button>
    </div>
  )
}
