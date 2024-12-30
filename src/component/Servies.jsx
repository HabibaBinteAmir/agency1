
import React from 'react'
import Images from './Images'
import Flex from './Flex'
import Heading from './Heading'
import Container from './Container'

const Servies = (props) => {
  return (
<>
<div className=" py-20 ">

    <Container >
        <div >
        <Flex className='justify-between  '>
        <div className="w-[45%]">
                            <Heading text={props.title1} as={'p'} className={'text-[16px] pt-11 pb-2 font-medium text-pColor'} />
                            <Heading text={props.heading1} as={'h2'} className={'text-[38px] font-semibold text-pColor pb-5'} />
                            <Heading text={props.p1} as={'p'} className={'text-[16px] pb-8 text-gray-500'} />
                        </div>
            <div className="w-[45%]">
                <Images src={props.src}  />
            </div>
        </Flex>
        </div>
    </Container>
</div>
</>
  )
}

export default Servies