import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Blog from '../Blog'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'

const BlogsPage = () => {
  return (
    <>
    <div className="py-8">
        <Container>
            <div className="">
            <Heading text={"Our blog"} as={"h4"} className={'text-[48px] text-pColor font-semibold pt-5 pb-5'} />
            </div>
            <Flex className={"gap-x-8"}>
               <div className="">
               <Blog src={blog1} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}/>
               </div>
               <div className="">
               <Blog src={blog2} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}/>
               </div>
               <div className="">
               <Blog src={blog3} title1={'19 Jan 2022'} title2={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} title3={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}/>
               </div>

            </Flex>
        </Container>

    </div>
    </>
  )
}

export default BlogsPage