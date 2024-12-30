import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";


const Nextarrow = ( props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={"absolute bottom-0 right-0 z-10"}
      
      onClick={onClick}
    > < IoIosArrowDroprightCircle className='text-[60px] bg-white text-[#5239FA] hover:text-buttonColor duration-300'/></div>
  )
}

export default Nextarrow