import { ArrowRight } from 'lucide-react'
import classes from './Button.module.css'
import SmartLink from './SmartLink'

const Button = ({ children, link }) => {
  return (
    <div className={`bg-accent/30 ${classes.btnFluffy}`}>
      <SmartLink className={classes.btnFluffy__link} href={link}>
        {children}
        <span><ArrowRight width={20} height={20}/></span>
      </SmartLink>
    </div>
  )
}

export default Button
