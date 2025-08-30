import React from 'react';

const KidsInfoCard = ({
    title,
    subtitle,
    items = [],
    bgcolor = '#001A70',
    textcolor = "white",
    imgtitulo = "/img/LENTES-3.png",
    titlesize = "60px"
}) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="p-6 shadow-lg relative overflow-hidden" style={{ backgroundColor: bgcolor }}>
                {/* Top Section with Star and Header */}
                <div className="relative mb-6 flex">
                    <img src={imgtitulo} alt="" className='w-[100px] h-auto' />
                    {/* Title and Subtitle */}
                    <div className="ml-3">
                        <h2 className=" font-eastman font-black italic mb-2 text-nowrap" style={{ color: textcolor, fontSize: titlesize, lineHeight: titlesize }}>
                            {title}
                        </h2>
                        <p className="text-3xl font-eastman -mt-1 font-bold text-orange-400 ">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className=" text-lg font-bol leading-relaxed" style={{ color: textcolor }}>
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
