import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Images from '../Images'
import user from '../../assets/user.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Slide from './Slide'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nextarrow from '../Nextarrow'
import Prevarrow from '../Prevarrow'

const Reviwe = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Nextarrow/>,
        prevArrow: <Prevarrow />
    };
    return (
        <div className="py-[100px]">
            <Container>
                <Flex className={"justify-between"}>
                    <div className="w-[30%]">
                        <Heading text={'What our clients say about us'} as={'h2'} className={"font-semibold text-[38px] text-navColor"} />
                        <Heading text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed..'} as={'p'} className={"text-pColor text-[16px] pt-[25px] pb-[25px]"} />

                    </div>
                    <div className="w-[66%]">
                        
                        <Slider {...settings}>
                            <div>
                            <Slide src={user2} />
                            </div>
                            <div>
                            <Slide src={user} />
                            </div>
                            <div>
                            <Slide src={user3} />
                            </div>
                            <div>
                            <Slide src={user4} />
                            </div>
                        </Slider>
                      




                      

                    </div>
                </Flex>
            </Container>

        </div>
    )
}

export default Reviwe