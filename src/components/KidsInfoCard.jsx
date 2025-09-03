import React from 'react';

const KidsInfoCard = ({
    title,
    subtitle,
    items = [],
    bgcolor = '#001A70',
    textcolor = "white",
    imgtitulo = "/img/LENTES-3.png",
    imgSize = 'w-[60px] h-auto sm:w-[90px] md:w-[100px] lg:w-[150px] 2xl:w-[200px]',
    id
}) => {
    return (
        <div id={id} className="w-full mx-auto">
            <div className="p-5 sm:p-10 lg:py-16 lg:px-20 2xl:py-24 2xl:px-32 relative overflow-hidden" style={{ backgroundColor: bgcolor }}>
                {/* Top Section with Star and Header */}
                <div className="relative mb-4 sm:mb-6 flex -ml-2 sm:-ml-3 md:-ml-5 items-center">
                    <img src={imgtitulo} alt={imgtitulo} className={`${imgSize}`} />
                    {/* Title and Subtitle */}
                    <div className="ml-2 sm:ml-3">
                        <h2 className="font-eastman font-black italic mb-1 sm:mb-2 text-nowrap text-2xl sm:text-6xl lg:text-8xl 2xl:text-[100px]" style={{ color: textcolor, lineHeight: '1.1' }}>
                            {title}
                        </h2>
                        <p className="text-lg sm:text-3xl lg:text-5xl 2xl:text-6xl font-eastman -mt-1 font-bold text-orange-400">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-1 sm:space-y-4 2xl:space-y-10">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 2xl:gap-6 sm:gap-3">
                            <div className="w-2 h-2 sm:w-4 sm:h-4 2xl:w-8 2xl:h-8 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                            <p className="text-sm sm:text-3xl lg:text-[40px] lg:leading-[40px] 2xl:text-6xl" style={{ color: textcolor }}>
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default KidsInfoCard;
