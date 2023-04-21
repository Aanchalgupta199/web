import React, { useEffect, useState } from 'react'

const useLogger = (b) => {

    const [a,setA]=useState(b);

  useEffect(() => {
    console.log(a);
  },[a])

  return [a,setA]
}

export default useLogger