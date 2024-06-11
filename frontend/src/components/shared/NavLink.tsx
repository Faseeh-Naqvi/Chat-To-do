import React from 'react'
import { Link } from 'react-router-dom'
type Props={
    to: string;
    background: string;
    text: string;
    textColor: string;
    onClick?:()=>Promise<void>;
}
const NavLink = (props: Props) => {
  return (
       <Link className='nav-link' to={props.to} style = {{background:props.background,color:props.textColor}} >{ props.text}</Link>
  )
}

export default NavLink