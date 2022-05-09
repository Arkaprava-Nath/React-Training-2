import React,{useState,useEffect} from 'react'
import useTitleCount from './useTitleCount';

function Button2() {
    const [count,setCount]=useState(0);
  useTitleCount(count)
    
    
  return (
      <>
      <h1 className='head'>{count}</h1>
    <div className='click' onClick={()=> setCount(count+1)}>Click</div>
    </>
  )
}

export default Button2