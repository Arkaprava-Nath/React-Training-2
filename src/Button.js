import React,{useState,useEffect} from 'react'
import useTitleCount from './useTitleCount'


function Button() {
    const [count,setCount]=useState(0);
   useTitleCount(count)
    
  return (
      <>
      <h1>{count}</h1>
    <div className='button' onClick={()=> setCount(count+1)}>Click</div>
    </>
  )
}

export default Button