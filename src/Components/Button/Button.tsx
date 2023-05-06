import "./Button.scss"
import { ArrowCircleLeft } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

interface ButtonProps {
  path: string | null
  icon: boolean,
  className?:string
  children: string
}

const Button = ({path, icon, className,children}: ButtonProps)=> {



  return <>
      <Link to={`${path}`} >
        <button className={`button button-${className}`}>
        {icon &&
         <ArrowCircleLeft size={32} />
        }
        {children}
        </button>
      </Link>
  </>
} 

export default Button