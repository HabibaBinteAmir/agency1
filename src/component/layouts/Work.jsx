import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import { FaArrowRightLong } from "react-icons/fa6";
import Button from '../Button';
import { Link } from 'react-router';
import Images from '../Images';
import pointer1 from '../../assets/pointer1.png'
import pointer2 from '../../assets/pointer2.png'
import pointer3 from '../../assets/pointer3.png'
import pointer4 from '../../assets/pointer4.png'

const Work = () => {
    return (
        <>
            <div className="py-[100px] bg-workColor ">
                <Container>
                    <Flex className={'justify-between'}>
                        <div className="w-[30%]">
                            <Heading text={'How we work'} as={'h2'} className={"font-semibold text-[48px] text-navColor"} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} as={'p'} className={"text-pColor text-[16px] pt-[15px] pb-[25px]"} />
                            <Link to={'/contact'}>
                                        <Button btntext={'Get in touch with us'} icon={ <FaArrowRightLong className='text-[#2405F2] text-[20px] flex ml-2'/>} className={'font-medium text-[16px] text-[#2405F2] flex items-center'} />  
                            </Link>
                        </div>
                        <div className="w-[60%] ">
                           <Flex className={"gap-x-5 flex flex-wrap mb-10"}>
                           <div className="w-[45%] mb-5">
                                <Images src={pointer1} alt={pointer1} className={""}/>
                                <Heading text={'Strategy'} as={'h2'} className={"font-medium text-[32px] text-navColor pt-3"} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} as={'p'} className={"text-pColor text-[14px] pt-[15px] pb-[25px]"} />

                            </div>
                            <div className="w-[45%] mb-5">
                                <Images src={pointer2} alt={pointer2} className={""}/>
                                <Heading text={'Strategy'} as={'h2'} className={"font-medium text-[32px] text-navColor pt-3"} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} as={'p'} className={"text-pColor text-[14px] pt-[15px] pb-[25px]"} />

                            </div>
                            <div className="w-[45%]">
                                <Images src={pointer3} alt={pointer3} className={""}/>
                                <Heading text={'Strategy'} as={'h2'} className={"font-medium text-[32px] text-navColor pt-3"} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} as={'p'} className={"text-pColor text-[14px] pt-[15px] pb-[25px]"} />

                            </div>
                            <div className="w-[45%]">
                                <Images src={pointer4} alt={pointer4} className={""}/>
                                <Heading text={'Strategy'} as={'h2'} className={"font-medium text-[32px] text-navColor pt-3"} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} as={'p'} className={"text-pColor text-[14px] pt-[15px] pb-[25px]"} />

                            </div>

                           </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Work