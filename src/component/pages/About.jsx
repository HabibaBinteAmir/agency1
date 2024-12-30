import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Images from '../Images'
import about from '../../assets/about.png'
import about2 from '../../assets/about2.png'
import Companies from '../layouts/Companies'
import Servies from '../Servies'
import servies1 from '../../assets/servies1.png'
import servies2 from '../../assets/servies2.png'
import Servies2 from '../Servies2'
import Icon1 from '../../assets/Icon1.png'
import Icon2 from '../../assets/Icon2.png'
import Icon3 from '../../assets/Icon3.png'
import member1 from '../../assets/member1.png'
import member2 from '../../assets/member2.png'
import member3 from '../../assets/member3.png'
import member4 from '../../assets/member4.png'



const About = () => {
    return (
        <>
            <div className="py-32 ">
                <Container>
                    <Flex className={'justify-between'}>
                        <div className="w-[45%]">
                            <Heading text={'About us'} as={'p'} className={'text-[18px] pt-5 pb-5 font-medium text-pColor'} />
                            <Heading text={'Our designs solve problems'} as={'h2'} className={'text-[54px] font-semibold text-pColor pb-5'} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'} as={'p'} className={'text-[16px]  text-gray-500'} />
                        </div>
                        <div className="w-[40%]">
                            <Images src={about} alt={about} className={'w-full'} />
                        </div>
                    </Flex>
                </Container>

            </div>
            <div className="">
                <Container>
                    <Flex className={'justify-between bg-workColor px-16 py-8 '}>
                        <div className="w-[45%]">
                            <Heading text={'Who we are'} as={'p'} className={'text-[16px] pt-11 pb-2font-medium text-pColor'} />
                            <Heading text={'Goal focussed'} as={'h2'} className={'text-[38px] font-semibold text-pColor pb-5'} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} as={'p'} className={'text-[16px] pb-8 text-gray-500'} />
                        </div>
                        <div className="w-[45%] pt-16">

                            <Heading text={'Goal focussed'} as={'h2'} className={'text-[38px] font-semibold text-pColor pb-5'} />
                            <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} as={'p'} className={'text-[16px] pb-8 text-gray-500'} />
                        </div>
                    </Flex>
                    <Images src={about2} className={"w-full"} />

                </Container>
            </div>
            {/* ===============================? */}
            {/* prosess part start */}
            <div className="pt-[80px]">
                <Container>
                    <div className="text-center">
                        <Heading text={'The process we follow'} as={'h2'} className={'text-[38px] font-semibold text-pColor pb-5'} />
                    </div>
                   
                    <div className="py-7  px-6">
                        <Flex className={'justify-between'}>
                            <div className="">
                                <div className="flex items-center pb-4">
                                    <div className="w-[24px] h-[24px] bg-[#2405F2] rounded-full"></div>
                                    <div className="border-t-2 border-dotted border-[#2405F2] w-[100px] mx-5"></div>
                                </div>
                                <Heading text={'Planning'} as={'h2'} className={'text-[24px] font-medium text-pColor pb-5'} />
                                <Heading text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} as={'p'} className={'text-[16px]  text-gray-500 pb-5'} />

                            </div>
                            <div className="">
                                <div className="flex items-center pb-4">
                                    <div className="w-[24px] h-[24px] bg-[#2405F2] rounded-full"></div>
                                    <div className="border-t-2 border-dotted border-[#2405F2] w-[100px] mx-5"></div>
                                </div>
                                <Heading text={'Conception'} as={'h2'} className={'text-[24px] font-medium text-pColor pb-5'} />
                                <Heading text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} as={'p'} className={'text-[16px]  text-gray-500 pb-5'} />

                            </div>
                            <div className="">
                                <div className="flex items-center pb-4">
                                    <div className="w-[24px] h-[24px] bg-[#2405F2] rounded-full"></div>
                                    <div className="border-t-2 border-dotted border-[#2405F2] w-[100px] mx-5"></div>
                                </div>
                                <Heading text={'Design'} as={'h2'} className={'text-[24px] font-medium text-pColor pb-5'} />
                                <Heading text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} as={'p'} className={'text-[16px]  text-gray-500 pb-5'} />

                            </div>
                            <div className="">
                                <div className="flex items-center pb-4">
                                    <div className="w-[24px] h-[24px] bg-[#2405F2] rounded-full"></div>
                                    <div className="border-t-2 border-dotted border-[#2405F2] w-[100px] mx-5"></div>
                                </div>
                                <Heading text={'Development'} as={'h2'} className={'text-[24px] font-medium text-pColor pb-5'} />
                                <Heading text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} as={'p'} className={'text-[16px]  text-gray-500 pb-5'} />

                            </div>
                            

                        </Flex>


                    </div>



                </Container>
            </div>
            {/* =====serviese part=====? */}
           <div className='bg-workColor pt-5'>
            <Servies title1={"Our Mission "} heading1={'Inspire, Innovate, Share'} p1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} src={servies1}/>
            <Servies2  title1={"Our Mission "} heading1={'Inspire, Innovate, Share'} p1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} src={servies2}/>
           </div>

            {/* =====serviese part=====? */}
            {/* =================work part======================? */}
            <div className="">
                <Container>
               <div className="text-center pt-[100px] pb ">
               <Heading text={'The benefits of working with us '} as={'h2'} className={'text-[48px] font-semibold text-pColor pb-10 px-[300px]'} />
               </div>
               <Flex className={"justify-between"}>
               <div className=" w-[32%] bg-workColor hover:shadow-lg p-10 rounded-md  tex mb-7 duration-700 transition-all">
                            <Images src={Icon1} alt={Icon1} className={"pt-4"} />
                            <Heading text={'Uses Client First'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>
                        <div className=" w-[32%] bg-workColor hover:shadow-lg p-10 rounded-md  tex mb-7 duration-700">
                            <Images src={Icon2} alt={Icon1} className={"pt-4"} />
                            <Heading text={'Two Free Revision Round'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>
                        <div className=" w-[32%] bg-workColor hover:shadow-lg p-10 rounded-md  tex mb-7  duration-700">
                            <Images src={Icon3} alt={Icon3} className={"pt-4"} />
                            <Heading text={'Template Customization'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>

               </Flex>
               <Companies/>
                </Container>

                <div className="py-10 pb-[100px] bg-workColor">
                <Container>
                    <div className="text-center">
                    <Heading text={'Meet our team'} as={'h4'} className={"font-medium text-[48px] text-navColor pt-5 "} />

                    </div>
                <Flex className={"justify-between pt-8"}>
                    <div className="w-[22%] bg-white text-center rounded-md  py-10 px-4 ">
                        <Images src={member3} className={'m-auto '}/>
                        <Heading text={'John Smith'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5 "} />
                        <Heading text={'CEO'} as={'h4'} className={" text-[16px] text-gray-500 pt-2"} />
                    </div>
                    <div className="w-[22%] bg-white py-10 px-4 text-center">
                        <Images src={member1} className={'m-auto'}/>
                        <Heading text={'Simon Adams'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5 "} />
                        <Heading text={'CTO'} as={'h4'} className={" text-[16px] text-gray-500 pt-2"} />
                    </div>
                    <div className="w-[22%] bg-white py-10 px-4 text-center">
                        <Images src={member2} className={'m-auto'}/>
                        <Heading text={'Paul Jones'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5 "} />
                        <Heading text={'Paul Jones'} as={'h4'} className={" text-[16px] text-gray-500 pt-2"} />
                    </div>
                    <div className="w-[22%] bg-white py-10 px-4 text-center">
                        <Images src={member4} className={'m-auto'}/>
                        <Heading text={'Sara Hardin'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5 "} />
                        <Heading text={'Project Manager'} as={'h4'} className={" text-[16px] text-gray-500 pt-2"} />
                    </div>
                </Flex>
                </Container>
               </div>
            </div>
            {/* =================work part======================? */}

        </>
    )
}

export default About