import React from 'react'
import Heading from '../Heading'
import Flex from '../Flex'
import Images from '../Images'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
const Slide = (props) => {
  return (
    <>

     <div className="slide">
                <Heading text={'"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."'} as={'h2'} className={"font-medium text-[30px] text-navColor"} />
                    <div className="pt-[px]">
                        <Flex className={"justify-between items-center"}>
                            <div className="flex items-center">
                                <div className="img">
                                    <Images src={props.src} className={" rounded-full w-full"}/>
                                </div>
                                <div className="ml-4">
                                    <Heading text={'Jenny Wilson'} as={'p'} className={'text-[18px] font-medium text-pColor'}/>
                                    <Heading text={'Vice President'} as={'p'} className={"text-[12px] font-medium text-pColor pt-1"}/>
                                </div>
                            </div>
                            
                        </Flex>
                    </div>
                </div>
    </>
  )
}

export default Slide