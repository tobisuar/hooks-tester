import React, { useEffect,useState } from 'react'
import { useForm } from '../../hooks/useForm';
import "./effects.css"
import { Messaje } from './messaje';


export const SimpleForm = () => {

    
    const [formState, setformState] = useForm({
        name:"",
        email:"",
    });

    const {name ,email} = formState;

    useEffect (() => {
        console.log()
    },[])

    useEffect(() => {
     
    }, [formState])

    useEffect(() => {
     
    }, [email])
    

    const handleInputChange = ({target}) => {
        console.log(target.name)
        setformState({
            ...formState,
            [target.name] : target.value
        })
    }

    
    return (
        <>
    
        <h1>useEffect</h1>
        <hr/>
    
        <div className='form-group'> 
        <input 
            type="text"
            name="name"
            className='form-control'
            placeholder='tu nombre'
            autoComplete='off'
            value={name}
            onChange= {handleInputChange}
        />

        </div>

        <div className='form-group'> 
        <input 
            type="text"
            name="email"
            className='form-control'
            placeholder='tobisuar2244@gmail.com'
            autoComplete='off'
            value={email}
            onChange= {handleInputChange}
        />

        </div>
            {(name === "123") && <Messaje/>}
    
        </>
    )
}
