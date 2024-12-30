import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import { Link } from 'react-router'
import Button from '../Button'

const Contactpage = () => {
    return (
        <div>
            <Container >
                <div className="pt-[100px] text-center">
                    <div className="px-[150px]">
                        <Heading text={'Contact Us'} as={'h1'} className={'font-semibold text-[48px] text-navColor '} />
                        <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'} as={'p'} className={'text-[16px] text-pColor pt-2 pb-8 px-[170px]'} />
                    </div>
                </div>
                <div className="max-w-[1000px] m-auto py-6 pt-[50px] bg-workColor p-20 rounded-xl mb-[120px]">
                   <Flex className={"justify-between flex flex-wrap"}>
                   <div className="w-[45%] mb-8">
                        <Heading text={'Name'} as={'h1'} className={'font-medium text-[18px] text-black pb-5 '} />
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="border border-gray-300 text-navColor py-[15px] px-[90px] rounded-lg focus:outline-none bg-transparent "
                        />

                    </div>
                   <div className="w-[45%] ">
                        <Heading text={'Email'} as={'h1'} className={'font-medium text-[18px] text-black pb-5 '} />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 text-navColor py-[15px] px-[90px] rounded-lg focus:outline-none bg-transparent"
                        />

                    </div>
                   <div className="w-[45%] ">
                        <Heading text={'Subject'} as={'h1'} className={'font-medium text-[18px] text-black pb-5 '} />
                        <input
                            type="text"
                            placeholder="Provide context"
                            className="border border-gray-300 text-navColor py-[15px] px-[90px] rounded-lg focus:outline-none bg-transparent"
                        />

                    </div>
                   <div className="w-[45%] ">
                        <Heading text={'Subject'} as={'h1'} className={'font-medium text-[18px] text-black pb-5 '} />
                        <input
                            type="text"
                            placeholder="Select Subject"
                            className="border border-gray-300 text-navColor py-[15px] px-[90px] rounded-lg focus:outline-none bg-transparent"
                        />

                    </div>
                   </Flex>
                   <div className="w-full mb-8 mt-7">
                        <Heading text={'Name'} as={'h1'} className={'font-medium text-[18px] text-black pb-5  '} />
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="border border-gray-300 text-navColor py-[15px] px-[15px] rounded-lg focus:outline-none bg-transparent w-full h-48 text-left "
                        />

                    </div>
                    <Link to={'/contact'}>
                                        <Button btntext={'Get started '}  className={'px-[65px]  py-[15px] font-medium text-[16px] text-white rounded-full hover group-hover:bg-buttonColor hover:text-buttonColor  duration-500 flex items-center border border-gray-500 bg-navColor mb-[100px]'} />  
                                    </Link>
                                    

                </div>
            </Container>

        </div>
    )
}

export default Contactpage