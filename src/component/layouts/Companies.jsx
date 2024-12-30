import React from 'react'
import Flex from '../Flex'
import Heading from '../Heading'
import Images from '../Images'
import company1 from '../../assets/company1.png'
import company2 from '../../assets/company2.png'
import company3 from '../../assets/company3.png'
import company4 from '../../assets/company4.png'
import company5 from '../../assets/company5.png'

const Companies = () => {
    return (
        <>
            <div className="py-8">
                <Flex className={'justify-between items-center'}>
                    <div className="py-2 w-[16%]">
                        <Heading text={'100.000+'} as={'p'} className={'font-semibold text-[38px] text-pColor '} />
                        <Heading text={'Finsweet Users'} as={'p'} className={' text-[16px] text-gray-500 '} />
                    </div>
                    <div className=" w-[11%]">
                    <Images src={company1} className={"w-full"} />
                    </div>
                    <div className=" w-[11%]">
                    <Images src={company2} className={"w-full"} />
                    </div>
                    <div className=" w-[11%]">
                    <Images src={company3} className={"w-full"} />
                    </div>
                    <div className=" w-[11%]">
                    <Images src={company4} className={"w-full"} />
                    </div>
                    <div className=" w-[11%]">
                    <Images src={company5} className={"w-full"} />
                    </div>
                </Flex>
            </div>
        </>
    )
}

export default Companies