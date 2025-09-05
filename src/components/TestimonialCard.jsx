import React from 'react';
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({
    imagePath,
    name,
    category,
    testimonial
}) => {
    return (
        <div className="w-[330px] min-[415px]:w-[380px] sm:w-[450px] lg:w-[800px] 2xl:w-[1200px] mx-auto">
            <div className="bg-[#eeeeef] rounded-2xl p-4 lg:p-8 2xl:p-12">
                <div className="flex flex-col min-[415px]:flex-row gap-2 sm:gap-6 2xl:gap-8">
                    {/* Left Side - Profile Picture and Rating */}
                    <div className="flex flex-col items-center">
                        {/* Profile Picture */}
                        <div className="w-24 aspect-square lg:w-64 2xl:w-[350px] rounded-full overflow-hidden mb-4">
                            <img
                                src={imagePath}
                                alt={name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* 5-Star Rating */}
                        <div className="flex sm:gap-1 ">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className='text-2xl lg:text-5xl 2xl:text-6xl text-[#FFA400]' />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Name, Category, and Testimonial */}
                    <div className="flex-1">
                        {/* Name and Category */}
                        <div className="mb-2 2xl:mb-5 flex flex-col items-center min-[415px]:items-start">
                            <h3 className="text-2xl lg:text-5xl 2xl:text-6xl font-eastman-bold text-[#001A70] 2xl:mb-5">
                                {name}
                            </h3>
                            <p className="text-lg sm:text-3xl 2xl:text-5xl text-[#001A70] font-medium 2xl:font-normal">
                                {category}
                            </p>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-lg min-[415px]:text-xs lg:text-xl 2xl:text-3xl leading-5 min-[415px]:leading-3 text-justify font-lato">
                            "{testimonial}"
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
