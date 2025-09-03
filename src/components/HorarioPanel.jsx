import React from 'react';

const HorarioPanel = ({
    imagePath,
    scheduleTitles = [],
    hours = [],
    backgroundColor = 'bg-gray-100',
    textColor = 'text-[#001A70]'
}) => {
    return (
        <div className={`${backgroundColor} w-full rounded-2xl px-2 pt-5 shadow-lg ${hours && hours.length > 0 && hours[hours.length - 1] !== hours[0] ? 'pb-10' : ''}`}>
            <div className="flex gap-3 lg:gap-6 2xl:gap-12 items-center">
                <img
                    src={imagePath}
                    alt="personaje horario"
                    className='w-28 min-[415px]:w-32 lg:w-64 2xl:w-96 h-auto'
                />

                {/* Vertical Line */}
                <div className={`w-0.5 h-28 lg:w-1 lg:h-52 2xl:w-1 2xl:h-80 ${textColor.replace('text-', 'bg-')}`}></div>

                {/* Right Side - Schedule Text */}
                <div className="flex-1">
                    <div className="space-y-1">
                        <div className={`${textColor} font-bold text-base min-[375px]:text-lg min-[415px]:text-xl lg:text-5xl 2xl:text-7xl`}>
                            {scheduleTitles.map((title, index) => (
                                <p key={index}>{title}</p>
                            ))}
                        </div>
                        <div className={`${textColor} font-bold text-xl min-[415px]:text-2xl lg:text-5xl 2xl:text-7xl font-lemon`}>
                            {hours.map((hour, index) => (
                                <p className=' 2xl:mb-2' key={index}>{hour}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorarioPanel;
