import React from 'react';
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({
    imagePath,
    name,
    category,
    testimonial
}) => {
    return (
        <div className=" w-[380px] mx-auto">
            <div className="bg-[#eeeeef] rounded-2xl p-4">
                <div className="flex gap-2">
                    {/* Left Side - Profile Picture and Rating */}
                    <div className="flex flex-col items-center">
                        {/* Profile Picture */}
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <img
                                src={imagePath}
                                alt={name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* 5-Star Rating */}
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className='text-2xl text-[#FFA400]' />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Name, Category, and Testimonial */}
                    <div className="flex-1">
                        {/* Name and Category */}
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-[#001A70] mb-1">
                                {name}
                            </h3>
                            <p className="text-lg text-[#001A70] font-medium">
                                {category}
                            </p>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-xs leading-3 font-bold text-justify">
                            "{testimonial}"
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
