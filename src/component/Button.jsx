import React from 'react'
const Button = ({btntext,className ,icon}) => {
    return (
      <button className={`${className}`}>{btntext} {icon}</button>
    )
  }

export default Button