import React, { ButtonHTMLAttributes } from 'react'

export type ButtonType =React.ButtonHTMLAttributes<HTMLButtonElement> &{
    name : string; 
}
const Button : React.FC<ButtonType>= ({name, ...props}) => {
  return (
    <div >
      <button  {...props}>{name}</button>
    </div>
  )
}

export default Button
