import React,{useEffect} from 'react';


const useTitleCount = (count) => {
  return (
     useEffect(() => {
      document.title=`Click (${count})`
      }
    )
  )
}

export default useTitleCount