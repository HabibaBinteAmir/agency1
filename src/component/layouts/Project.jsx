import React from 'react'
import Flex from '../Flex'
import Container from '../Container'
import Heading from '../Heading'
import Button from '../Button'
import { Link } from 'react-router'
import { FaArrowRightLong } from "react-icons/fa6";
import Images from '../Images'
import Card from '../../assets/Card.png'
import Card2 from '../../assets/Card2.png'
import Card3 from '../../assets/Card3.png'

const Project = () => {
    return (
        <>
            <div className="py-[100px]">
                <Container>
                    <div className="">
                        <Flex className={"justify-between items-center"}>
                            <div className="">
                                <Heading text={"View our projects"} as={"h4"} className={"font-semibold text-[48px] text-pColor"} />
                            </div>
                            <div className="">
                                <Link to={'/contact'}>
                                    <Button btntext={'View More'} icon={<FaArrowRightLong className='text-pColor text-[20px] flex ml-2' />} className={'font-medium text-[16px] text-pColor flex items-center'} />
                                </Link>
                                

                            </div>
                        </Flex>
                    </div>
                    <div className="pt-[50px]">
                        <Flex className={"justify-between"}>
                            <div className="w-[60%]">
                                <Images src={Card} alt={Card} className={"w-full h-full"}/>
                            </div>
                            <div className="w-[35%]">
                            <Images src={Card2} alt={Card} className={"w-full  mb-7"}/>
                            <Images src={Card3} alt={Card} className={"w-full "}/>

                            </div>
                        </Flex>
                    </div>
                </Container>

            </div>
        </>
    )
}

export default Project