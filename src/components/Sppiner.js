import React from 'react'
import "./Sppiner.css"

const Sppiner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className="loader" ></div>
        <p className='text-bgDark text-lg fontsemibold'>Loading....</p>
    </div>
  )
}

export default Sppiner;