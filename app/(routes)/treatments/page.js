"use client"

import React, { useEffect } from 'react'

const treatments = () => {
    const alerted= setTimeout(()=>{
        alert("timeout set");
    }, 3000)
    useEffect(
        alerted
    )
  return (
    <div>
        treatments
    </div>
  )
}

export default treatments