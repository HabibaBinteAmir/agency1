import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import Button from '../Button';
import Images from '../Images';
import hero from '../../assets/hero.jpg'
import Companies from '../layouts/Companies';
import Icon1 from '../../assets/Icon1.png'
import Icon2 from '../../assets/Icon2.png'
import Icon3 from '../../assets/Icon3.png'
import Servies from '../Servies';
import servies3 from '../../assets/servies3.png'
import servies4 from '../../assets/servies4.png'
import servies5 from '../../assets/servies5.png'
import servies6 from '../../assets/servies6.png'
import Servies2 from '../Servies2';
import { Link } from 'react-router';
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import FAQ from '../layouts/FAQ';


const FeaturePage = () => {
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
                                        <Button btntext={'View Pricing'} className={'px-[35px] py-[15px] font-medium text-[16px] text-navColor border hover hover:bg-navColor bg-buttonColor hover:text-white rounded-full  border-menuColor  duration-500 mr-6'} />
                                    </Link>
                                    
                                   
                                </Flex>
                            </div>


                        </div>
                        
                    </Flex>
                </Container>
            </div>

            {/* ----------------------?working with us------------------ */}
            <div className="">
                <Container>
                    <Companies/>
               <div className="text-center pt-[50px] pb-[10px] ">
               <Heading text={'The benefits of working with us '} as={'h2'} className={'text-[48px] font-semibold text-pColor pb-10 px-[300px]'} />
               </div>
               <Flex className={"justify-between pb-[30px]"}>
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
                {/* ----------------------?working with us------------------ */}
                
              
              
                </Container>
            </div>
            {/* ===================servies======================= */}
            <div className="">
                    <Servies title1={'Use Client-first'} heading1={"Top agencies and freelancers around the world use Client-first "} p1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'} src={servies3}/>
                </div>
                <div className="bg-workColor">
                    <Servies2 title1={'24/7 Support'} heading1={"Working with us, you will be getting 24/7 priority support"} p1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."} src={servies4}/>
                </div>
                <div className="">
                    <Servies title1={'Free Revision Rounds'} heading1={"TGet free Revisions and one week of free maintenance"} p1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'} src={servies5}/>
                </div>
                <div className="bg-yellow-50">
                    <Servies2 title1={'Quick Delivery'} heading1={"Guranteed 1 week delivery for standard five pager website"} p1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."} src={servies6}/>
                </div>
                  {/* ===================servies======================= */}
                  {/* faq section */}
                  <FAQ/>
                  {/* faq section */}
           
    </>
  )
}

export default FeaturePage