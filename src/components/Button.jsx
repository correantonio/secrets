import React from 'react'
import { ArrowRight } from 'lucide-react'

const Button = ({ children, link }) => {
  return (
    <a className='flex w-fit items-center gap-2 px-6 py-3 hover:-translate-y-1 font-display text-lg text-grayish-10 bg-accent shadow-lg shadow-accent/50 cursor-pointer hover:bg-accent/80 transition' href={link}>
      { children }
      <span><ArrowRight width={20} height={20}/></span>
    </a>
  )
}

export default Button
