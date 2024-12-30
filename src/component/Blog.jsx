import React from 'react'
import Container from './Container'
import Images from './Images'
import blog1 from '../assets/blog1.png'
import Heading from './Heading'
import Button from './Button'
import { Link } from 'react-router'
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = (props) => {
    return (
        <div className="">
            <Images src={props.src} className={'w-full'} />
            <Heading text={props.title1} as={"p"} className={'text-[16px] text-pColor pt-6 pb-5'} />
            <Heading text={props.title2} as={"h4"} className={'text-[24px] text-pColor font-medium pt-1 pb-5'} />
            <Heading text={props.title3} as={"h5"} className={'text-[16px] text-pColor '} />
            <Link to={'/blog'}>
                <Button
                    btntext={'Read More'}
                    icon={<FaArrowRightLong className='text-black  flex ml-2' />}
                    className={' py-[15px] font-medium text-[20px] text-black  flex items-center'}
                />
            </Link>
            
        </div>
    )
}

export default Blog