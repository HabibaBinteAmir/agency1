import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import { Link } from 'react-router'
import Menu from '../Menu'
import logo from '../../assets/logo.png'
import { FaAngleDown } from "react-icons/fa6";
import Button from '../Button'
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    <div className="py-4 bg-navColor">
        <Container>
        <Flex className={'items-center'}>
          <div className="w-[15%]">
          <Link to=     {"/"}  >
            <Images src={logo} alt={logo} />
          </Link>
          </div>
          <div className="w-[70%] ">
            <Menu className={'flex text-sm text-menuColor justify-end mr-10 '}>
            <Link to={'/'}>
            <li className=" hover:text-hoverColor duration-300 flex items-center gap-0.5">  Home</li>
            </Link>
            <Link to={'/about'}>
            <li className=" hover:text-hoverColor duration-300 flex items-center gap-0.5">  About Us</li>
            </Link>
            <Link to={'/features'}>
            <li className=" hover:text-hoverColor duration-300 flex items-center gap-0.5">  Features</li>
            </Link>
            <Link to={'/pricing'}>
            <li className=" hover:text-hoverColor duration-300 flex items-center gap-0.5">  Pricing</li>
            </Link>
            
            <Link to={'/blog'}>
            <li className=" hover:text-hoverColor duration-300 flex items-center gap-0.5">  Blog</li>
            </Link>
            </Menu>
          </div>
         <div className="w-[15%]">
         <Link to={'/contact'}>
             <Button btntext={'Contact me'} className={'px-[18px] py-[12px] font-medium text-[16px] text-white border hover hover:bg-buttonColor hover:text-black rounded-full  border-menuColor  duration-500'} />
             </Link>
         </div>

        </Flex>
        

        </Container>
    </div>
    </>

  )
}

export default Header