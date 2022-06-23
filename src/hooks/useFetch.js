import React, { useEffect, useState,useRef } from 'react'
import { setState } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [first, setfirst] = useState({data:null , loading:null , error:null})

    useEffect(() => {

        return() => {
            isMounted.current = false;
        }
    } , [])

    useEffect(() =>{

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                
                setTimeout(() => {
                    if(isMounted.current){
               
                         setfirst({
               
                             loading:false,
               
                             error:null,
                
                             data});
                        } 
            
                    },4000);
        })  
    },[url])

    
    return first;
}
