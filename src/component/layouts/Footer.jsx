import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import logo from '../../assets/logo.png'
import Heading from '../Heading'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Menu from '../Menu'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <div className="pt-[60px] bg-navColor">
                <Container>
                    <Flex className={"justify-between "}>
                        <div className="w-[40%] pt-11">
                            <Images src={logo} className={'w-[40%]'} />


                            <Heading text={"We are always open to discuss your project and improve your online presence."} as={"h3"} className={"font-sebibold text-workColor text-[16px] pr-20 pt-10 pb-20"} />
                            <div className="py-1 bg-buttonColor">
                                <Flex className={"justify-between "}>
                                    <div className="w-[50%] p-3">
                                        <Heading text={"Email me at"} as={"h3"} className={"font-sebibold text-pColor text-[18px] pr-20 pt-6px"} />
                                        <Heading text={"contact@website.com"} as={"h3"} className={"font-sebibold text-pColor text-[16px] pr-20 pt-6x"} />


                                    </div>
                                    <div className="w-[50%] p-3">
                                        <Heading text={"Call us"} as={"h3"} className={"font-sebibold text-pColor text-[18px] pr-20 pt-6px"} />
                                        <Heading text={"0927 6277 28525"} as={"h3"} className={"font-sebibold text-pColor text-[16px] pr-20 pt-6x"} />

                                    </div>
                                </Flex>
                            </div>


                        </div>
                        <div className="w-[50%] pl-10 pr-20 pt-8 ">
                            <Heading text={"Lets Talk!"} as={"h3"} className={"font-sebibold text-white text-[48px] pr-20 pt-6px"} />
                            <Heading text={"We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges."} as={"h3"} className={" text-gray-400 text-[16px] pr-20 pt-6x"} />
                            <div className=" text-[30px] text-workColor flex gap-4 pt-7">
                                < FaFacebook />
                                < FaTwitter />
                                < FaInstagramSquare />
                                < FaLinkedin />

                            </div>
                        </div>
                    </Flex>

                </Container>
                <div className="bg-white">
  <Container>
    <Flex className={"justify-between items-center"}>
      {/* Copyright Section */}
      <div className="w-full sm:w-1/3">  {/* Use flex basis for responsive layout */}
        <Heading 
          text={"Copyright 2022, Finsweet.com"} 
          as={"h3"} 
          className={"font-semibold text-pColor text-[18px] pr-20 pt-6 pb-5"}
        />
      </div>

      {/* Menu Section */}
      <div className="w-full sm:w-2/3 py-2">
        <Menu className={'flex text-[18px] text-pColor justify-end space-x-6'}>
          <Link to={'/'}>
            <li className="hover:text-hoverColor duration-300 flex items-center">Home</li>
          </Link>
          <Link to={'/about'}>
            <li className="hover:text-hoverColor duration-300 flex items-center">About Us</li>
          </Link>
          <Link to={'/features'}>
            <li className="hover:text-hoverColor duration-300 flex items-center">Features</li>
          </Link>
          <Link to={'/pricing'}>
            <li className="hover:text-hoverColor duration-300 flex items-center">Pricing</li>
          </Link>
          
          <Link to={'/blog'}>
            <li className="hover:text-hoverColor duration-300 flex items-center">Blog</li>
          </Link>
        </Menu>
      </div>
    </Flex>
  </Container>
</div>

            </div>
        </>
    )
}

export default Footer