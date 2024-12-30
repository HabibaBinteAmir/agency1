import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Images from '../Images'
import Icon1 from '../../assets/Icon1.png'
import Icon2 from '../../assets/Icon2.png'
import Icon3 from '../../assets/Icon3.png'
import Icon4 from '../../assets/Icon4.png'
import Icon5 from '../../assets/Icon5.png'
import Icon6 from '../../assets/Icon6.png'

const Feature = () => {
    return (
        <>
            <div className="py-[50px] bg-workColor">
                <Container>
                    <div className="text-center">
                        <Heading text={'Features'} as={'p'} className={'text-[16px] text-pColor  font-medium'} />
                        <Heading text={'Design that solves problems, one product at a time'} as={'p'} className={'font-semibold text-[48px] text-pColor pr-[280px] pl-[280px]'} />

                    </div>
                    <Flex className={"justify-between flex flex-wrap pt-[40px]"}>
                        <div className=" w-[32%] bg-white hover:shadow-lg p-10 rounded-md  tex mb-7 duration-700">
                            <Images src={Icon1} alt={Icon1} className={"pt-4"} />
                            <Heading text={'Uses Client First'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>
                        <div className=" w-[32%] bg-white hover:shadow-lg p-10 rounded-md  tex mb-7">
                            <Images src={Icon2} alt={Icon1} className={"pt-4"} />
                            <Heading text={'Two Free Revision Round'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>
                        <div className=" w-[32%] bg-white hover:shadow-lg p-10 rounded-md  tex mb-7">
                            <Images src={Icon3} alt={Icon3} className={"pt-4"} />
                            <Heading text={'Template Customization'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>
                        <div className=" w-[32%] bg-white hover:shadow-lg p-10 rounded-md  tex mb-7">
                            <Images src={Icon4} alt={Icon4} className={"pt-4"} />
                            <Heading text={'24/7 Support'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>
                        <div className=" w-[32%] bg-white hover:shadow-lg p-10 rounded-md  tex mb-7">
                            <Images src={Icon5} alt={Icon5} className={"pt-4"} />
                            <Heading text={'Quick Delivery'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>
                        <div className=" w-[32%] bg-white hover:shadow-lg p-10 rounded-md  tex mb-7">
                            <Images src={Icon6} alt={Icon6} className={"pt-4"} />
                            <Heading text={'Hands-on approach'} as={'h4'} className={"font-medium text-[24px] text-navColor pt-5"} />
                            <Heading text={'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '} as={'p'} className={"text-pColor text-[14px] pt-[20px] pb-[30px]"} />


                        </div>

                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Feature