import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import hand from '../../assets/hand.png'
import Heading from '../Heading'
import Button from '../Button'
import { Link } from 'react-router'
import { FaArrowRightLong } from "react-icons/fa6";

const Inqueray = () => {
    return (
        <>
            <div className="mb-[100px]">
                <Container>
                    <Flex className={"justify-between"}>
                        <div className="w-[50%]">
                            <Images src={hand} className={'w-full h-full'} />
                        </div>
                        <div className="w-[50%] bg-navColor py-24 px-16">
                            <Heading text={'Send inquiry'} as={'h3'} className={"font-medium text-white text-[32px]"} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'} as={'h3'} className={"font-medium text-workColor text-[18px] pt-5 pb-5"} />

                            {/* Input fields */}
                            <input
                                type="text"
                                placeholder='Your Name'
                                className='w-full px-4 py-4 font-medium text-[18px] bg-navColor text-white border border-gray-500 rounded-md mt-4 focus:outline-none'
                            />
                            <input
                                type="text"
                                placeholder='Email'
                                className='w-full px-4 py-4 font-medium text-[18px] bg-navColor text-white border border-gray-500 rounded-md mt-4 focus:outline-none'
                            />
                            <input
                                type="text"
                                placeholder='Paste your Figma design URL'
                                className='w-full px-4 py-4 font-medium text-[18px] bg-navColor text-white border border-gray-500 rounded-md mt-4 focus:outline-none'
                            />
                            
                           <div className="text-center">
                             {/* Both buttons wrapped in a flex container with column direction */}
                             <div className="flex flex-col items-center space-y-4">  {/* Added space between buttons */}
                                 <Link to={'/contact'}>
                                    <Button 
                                        btntext={'Send an Inquiry'} 
                                        className={'px-[90px] py-[18px] font-medium text-[18px]  border hover bg-buttonColor hover:text-white rounded-full  hover:border-menuColor duration-500 mt-10'} 
                                    />
                                </Link>
                                
                                <Link to={'/pricing'}>
                                    <Button 
                                        btntext={'View Pricing'} 
                                        icon={<FaArrowRightLong className='text-[#ffffff]  flex ml-2' />} 
                                        className={'px-[35px] py-[15px] font-medium text-[20px] text-white  flex items-center'} 
                                    />
                                </Link>
                             </div>
                           </div>
                        </div> {/* This was missing! */}
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Inqueray;
