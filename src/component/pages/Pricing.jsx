import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Pointer from '../../assets/Pointer.png'
import Images from '../Images'
import Button from '../Button'
import { Link } from 'react-router'
import FAQ from '../layouts/FAQ'

const Pricing = () => {
    return (
        <>
            <div className="py-6">
                <Container>
                    <div className="text-center px-[350px] pt-[50px]">
                        <Heading text={'Our Pricing Plans'} as={'h4'} className={"font-medium text-[48px] text-navColor pt-5"} />
                        <Heading text={'When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.'} as={'p'} className={"text-gray-500 text-[14px] pt-[20px] pb-[30px]"} />
                    </div>
                    <div className="pt-[20px] pb-[50px]">
                        <Flex className={'justify-between'}>
                            <div className="w-[32%] p-14 bg-workColor rounded-xl group hover:bg-navColor hover:text-white  duration-700">
                                <div className="flex items-center">
                                    <Heading
                                        text={'$299'}
                                        as={'h4'}
                                        className="font-medium text-[38px] text-navColor pt-5 group-hover:text-white mr-3"
                                    />
                                    <Heading
                                        text={'Per Design'}
                                        as={'h4'}
                                        className="font-medium text-[16px] text-[#2405F2] pt-5 group-hover:text-buttonColor"
                                    />
                                </div>
                                <Heading
                                    text={'Landing Page '}
                                    as={'p'}
                                    className="font-medium text-[24px] text-navColor pt-5 group-hover:text-white"
                                />
                                <Heading
                                    text={'When you’re ready to go beyond prototyping in Figma, '}
                                    as={'p'}
                                    className="font-medium text-[16px] text-navColor pt-5 group-hover:text-gray-500 pb-10"
                                />
                                <div className="flex items-center pt-4 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'All limited links'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Own analytics platform'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Chat support'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Optimize hashtags'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-8">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Unlimited users'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex justify-cente pt-[20px]">
                                <Link to={'/contact'}>
                                        <Button btntext={'Get started '}  className={'px-[65px]  py-[15px] font-medium text-[16px] text-white rounded-full hover group-hover:bg-buttonColor hover:text-black  duration-500 flex items-center border border-gray-500 bg-navColor'} />  
                                    </Link>
                                    
                                </div>
                                
                            </div>
                            <div className="w-[32%] p-14 bg-workColor rounded-xl group hover:bg-navColor hover:text-white  duration-700">
                                <div className="flex items-center">
                                    <Heading
                                        text={'$399'}
                                        as={'h4'}
                                        className="font-medium text-[38px] text-navColor pt-5 group-hover:text-white mr-3"
                                    />
                                    <Heading
                                        text={'Multi Design'}
                                        as={'h4'}
                                        className="font-medium text-[16px] text-[#2405F2] pt-5 group-hover:text-buttonColor"
                                    />
                                </div>
                                <Heading
                                    text={'Website Page  '}
                                    as={'p'}
                                    className="font-medium text-[24px] text-navColor pt-5 group-hover:text-white"
                                />
                                <Heading
                                    text={'When you’re ready to go beyond prototyping in Figma, '}
                                    as={'p'}
                                    className="font-medium text-[16px] text-navColor pt-5 group-hover:text-gray-500 pb-10"
                                />
                                <div className="flex items-center pt-4 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'All limited links'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Own analytics platform'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Chat support'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Optimize hashtags'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-8">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Unlimited users'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex justify-cente pt-[20px]">
                                <Link to={'/contact'}>
                                        <Button btntext={'Get started '}  className={'px-[65px]  py-[15px] font-medium text-[16px] text-white rounded-full hover group-hover:bg-buttonColor hover:text-black  duration-500 flex items-center border border-gray-500 bg-navColor'} />  
                                    </Link>
                                    
                                </div>
                                
                            </div>
                            <div className="w-[32%] p-14 bg-workColor rounded-xl group hover:bg-navColor hover:text-white  duration-700">
                                <div className="flex items-center">
                                    <Heading
                                        text={'$499 +'}
                                        as={'h4'}
                                        className="font-medium text-[38px] text-navColor pt-5 group-hover:text-white mr-3"
                                    />
                                    <Heading
                                        text={'Complex Project'}
                                        as={'h4'}
                                        className="font-medium text-[16px] text-[#2405F2] pt-5 group-hover:text-buttonColor"
                                    />
                                </div>
                                <Heading
                                    text={'Website Page  '}
                                    as={'p'}
                                    className="font-medium text-[24px] text-navColor pt-5 group-hover:text-white"
                                />
                                <Heading
                                    text={'When you’re ready to go beyond prototyping in Figma, '}
                                    as={'p'}
                                    className="font-medium text-[16px] text-navColor pt-5 group-hover:text-gray-500 pb-10"
                                />
                                <div className="flex items-center pt-4 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'All limited links'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Own analytics platform'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Chat support'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-2">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Optimize hashtags'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex items-center pt-2 pb-8">
                                    <Images src={Pointer}  />
                                    <Heading
                                    text={'Unlimited users'}
                                    as={'p'}
                                    className=" text-[18px] text-navColor group-hover:text-workColor  ml-2"
                                />

                                </div>
                                <div className="flex justify-cente pt-[20px]">
                                <Link to={'/contact'}>
                                        <Button btntext={'Get started '}  className={'px-[65px]  py-[15px] font-medium text-[16px] text-white rounded-full hover group-hover:bg-buttonColor hover:text-black  duration-500 flex items-center border border-gray-500 bg-navColor'} />  
                                    </Link>
                                    
                                </div>
                                
                            </div>


                        </Flex>
                    </div>
                    <FAQ/>


                </Container>
            </div>
        </>

    )
}

export default Pricing