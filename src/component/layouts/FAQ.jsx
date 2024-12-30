import React, { useState } from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import { FaArrowRightLong } from "react-icons/fa6";
import Button from '../Button';
import { Link } from 'react-router';
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const FAQ = () => {
  // Track which dropdown is open using an index
  const [openIndex, setOpenIndex] = useState(null); // null means no dropdown is open

  // List of FAQs
  const faqs = [
    { question: "How much time does it take?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "What is your class naming convention?", answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "How do you communicate?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "I have a bigger project. Can you handle it?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "What is your class naming convention?", answer: "YLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
    // Add more FAQs as needed
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the selected dropdown
  };

  return (
    <>
      <div className="py-16 bg-workColor">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[30%]">
              <Heading text={"Frequently asked questions"} as={"h3"} className={"font-sebibold text-pColor text-[38px] pr-12"} />
              <Link to={'/contact'}>
                <Button
                  btntext={'Contact Us for more info'}
                  icon={<FaArrowRightLong className='text-[#2405F2] text-[20px] flex ml-2' />}
                  className={'font-medium text-[16px] text-[#2405F2] flex items-center pt-[20px]'}
                />
              </Link>
            </div>
            <div className="w-[60%]">
              {/* Loop through each FAQ item */}
              {faqs.map((faq, index) => (
                <div key={index}>
                  {/* Toggle for each question */}
                  <div className="review 1 drop" onClick={() => toggleDropdown(index)}>
                    <div className="flex items-center justify-between pt-9 pb-9 duration-700 transition-all">
                      <div className="flex">
                        <Heading text={`0${index + 1}`} as={"h3"} className={"font-medium text-[#2405F2] text-[24px] mr-8 "} />
                        <Heading text={faq.question} as={"h3"} className={"font-medium text-pColor text-[24px] pr-12 "} />
                      </div>
                      <div>
                        {openIndex === index ? (
                          <RxCross2 className='text-[24px]' />
                        ) : (
                          <GoPlus className='text-[24px]' />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Show the answer only if this dropdown is open */}
                  {openIndex === index && (
                    <div className="flex justify-between items-center">
                      <Heading
                        text={faq.answer}
                        as={"h3"}
                        className={"text-pColor border-b border-[#ECECF1] text-[18px] font-medium pt-8 pl-14 pr-40 pb-10"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
