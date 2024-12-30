import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import Button from '../Button';
import { Link } from 'react-router';
import Images from '../Images';
import hero from '../../assets/hero.jpg'

const Banner = () => {
    return (
        <>
            <div className="bg-bannerbg bg-cover bg-center   ">
                <Container>
                    <Flex>
                        <div className="w-[45%] mt-[80px] pb-[50px]">
                            <Heading text={"Building stellar websites for early startups"} as={'h1'} className={"font-semibold text-[54px] text-white"} />
                            <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."} as={'p'} className={" text-[16px] text-menuColor pt-6 pb-6"} />
                            <div className="pt-5 pb-5">
                                <Flex>
                                    <Link to={'/contact'}>
                                        <Button btntext={'View all work'} className={'px-[35px] py-[15px] font-medium text-[16px] text-white border hover hover:bg-buttonColor hover:text-black rounded-full  border-menuColor  duration-500 mr-6'} />
                                    </Link>
                                    <div className="flex items-center">
                                    <div className="">
                                    <Link to={'/contact'}>
                                        <Button btntext={'View Pricing'} icon={ <FaArrowRightLong className='text-[#ffffff] text-[20px] flex ml-2'/>} className={'px-[35px] py-[15px] font-medium text-[16px] text-white rounded-full hover hover:bg-buttonColor hover:text-black    duration-500 flex items-center'} />  
                                    </Link>
                                    </div>
                                    
                                    </div>
                                   
                                </Flex>
                            </div>


                        </div>
                        
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Banner