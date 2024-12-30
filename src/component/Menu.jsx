import React from 'react'

const Menu = ({children,className}) => {
    return (
      <>
      <ul className={`gap-x-7 ${className}`}>
         {children}
      </ul>
      </>
    )
  }

export default Menu