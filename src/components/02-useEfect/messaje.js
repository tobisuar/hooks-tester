import { cleanup } from '@testing-library/react'
import React,{useCallback, useEffect,useState} from 'react'

export const Messaje = () => {

    const [coords, setCoords] = useState({x:0,y:0})
    const {x,y} = coords;


    useEffect(() => {

      const mouseMove = (e) => {
        const coords = {x: e.x,y:e.y};
        setCoords(coords);
      }

      window.addEventListener("mousemove", mouseMove) 

      return () => {
        window.removeEventListener("mousemove", mouseMove);
      }
    }, [])
    
    const bruh = ("hola papu");

    
  return (
    <div> 
        
        <h3>sos un capo</h3>
        <p>
          x:{x} y:{y}
        </p>
    
    </div>
  )
}
