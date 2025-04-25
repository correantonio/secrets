import React, { Children } from 'react'

const Titleh1 = ( { children } ) => {
  return (
    <h1 className='font-display text-grayish-10 text-3xl lg:text-5xl font-bold mb-6'>
      { children }
    </h1>
  )
}

export default Titleh1
