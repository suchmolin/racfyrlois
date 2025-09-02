import React from 'react';

const KidsCard = ({
    imagePath,
    backgroundColor = '#001A70',
    titleColor = '#97D700',
    subtitle = '3-5 años',
    title = 'Kids',
    titleSize = '60px',
    imgWidth = '350px',
    imgAlt = ''
}) => {
    return (
        <div className='w-full flex justify-center relative z-10'>
            <div className="relative w-[300px] xl:w-[380px] min-[1610px]:w-[440px] mx-auto">
                {/* Main Card */}
                <div className="relative rounded-2xl shadow-lg">
                    {/* Top Section - Light Grey */}
                    <div className="bg-gray-200 lg:h-44 min-[1610px]:h-[240px] px-4 pt-3 pb-20 relative rounded-2xl">
                        {/* Title - Kids */}
                        <div className="text-left">
                            <h2
                                className={`italic font-black font-eastman ${titleSize}`}
                                style={{ color: titleColor }}
                            >
                                {title}
                            </h2>
                            <p
                                className="text-3xl xl:text-4xl min-[1610px]:text-5xl xl:mt-1 font-bold -mt-1 min-[1610px]:mt-2 text-[#001A70]"
                            >
                                {subtitle}
                            </p>
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute top-3 right-4 flex gap-1">
                            <div
                                className="w-5 h-5 rounded-full"
                                style={{ backgroundColor: '#001A70' }}
                            ></div>
                            <div
                                className="w-5 h-5 rounded-full"
                                style={{ backgroundColor: '#001A70' }}
                            ></div>
                        </div>
                    </div>

                    {/* Bottom Section - Dynamic Background Color */}
                    <div
                        className=" rounded-2xl -mt-8 h-[220px] lg:h-[230px] xl:h-[330px] min-[1610px]:h-[380px] relative"
                        style={{ backgroundColor: backgroundColor }}
                    >
                        {/* Main Image */}


                    </div>
                </div>
                <img src={imgAlt} alt="imagen 3d" className='absolute -bottom-10 -right-10 w-[170px] h-auto z-20' style={{}} />

            </div>
            <img
                src={imagePath}
                alt="Kids program"
                className={`absolute bottom-0 h-auto object-cover ${imgWidth}`}
            />
        </div>
    );
};

export default KidsCard;
