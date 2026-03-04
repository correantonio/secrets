import React, { Children } from 'react'
import SplitText from "../SplitText";


const Titleh1 = ( { children } ) => {
  return (
    <SplitText
      text={ children }
      className="font-display text-grayish-10 text-3xl lg:text-5xl font-bold mb-6"
      delay={50}
      duration={1.25}
      ease="power3.out"
      splitType="lines"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="inherit"
      showCallback
      tag='h1'
    />
  )
}

export default Titleh1
