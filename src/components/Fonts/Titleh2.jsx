import React from 'react'
import SplitText from "../SplitText";

const Titleh2 = ( { children } ) => {
  return (
    <SplitText
      text={ children }
      className="font-display text-[1.5rem] text-grayish-10 mb-6 font-bold lg:text-[2rem]"
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
      tag='h2'
    />
  )
}

export default Titleh2
