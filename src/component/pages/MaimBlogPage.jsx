import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Images from '../Images'
import blog4 from '../../assets/blog4.png'
import blog1 from '../../assets/blog1.png'
import blog5 from '../../assets/blog5.png'
import blog7 from '../../assets/blog7.png'
import blog8 from '../../assets/blog8.png'
import blog9 from '../../assets/blog9.png'
import blog10 from '../../assets/blog10.png'
import blog11 from '../../assets/blog11.png'
import Button from '../Button'
import Flex from '../Flex'
import Blog from '../Blog'

const MaimBlogPage = () => {
    return (
        <div className="">
            <Container>
                <div className="pt-[100px] text-center">
                    <div className="px-[150px]">
                    <Heading text={'A UX Case Study on Creating a Studious Environment for Students'} as={'h1'} className={'font-semibold text-[48px] text-navColor '} />
                    <Heading text={'A UX Case Study on Creating a Studious Environment for Students'} as={'p'} className={'text-[16px] text-pColor pt-2 pb-4'} />
                    </div>
                    <Images src={blog4} className={'pt-[20px]'} />
                    <div className="px-[190px]">
                    <Heading text={'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.'} as={'p'} className={'text-[16px] text-gray-500 pt-5 pb-4'} />
                    </div>
                    <Button btntext={"Read more"} className={'text-[16px] text-[#2405F2] pt-2'} />


                </div>
                <div className="py-[100px]">
                    <div className="">
                        <Heading text={'Our Blog'} as={'h1'} className={'font-semibold text-center text-[48px] text-navColor pb-[20px]'} />
                        <Flex className={"justify-between flex flex-wrap"}>
                            <div className="w-[31%]">
                                <Blog src={blog5} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
                            </div>
                            <div className="w-[31%]">
                                <Blog src={blog7} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
                            </div>
                            <div className="w-[31%]">
                                <Blog src={blog8} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
                            </div>
                            <div className="w-[31%]">
                                <Blog src={blog9} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
                            </div>
                            <div className="w-[31%]">
                                <Blog src={blog10} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
                            </div>
                            <div className="w-[31%]">
                                <Blog src={blog11} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'} />
                            </div>
                            

                        </Flex>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default MaimBlogPage