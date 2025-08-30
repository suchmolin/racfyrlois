import React from 'react';

const HorarioPanel = ({
    imagePath,
    scheduleTitles = [],
    hours = [],
    backgroundColor = 'bg-gray-100',
    textColor = 'text-[#001A70]'
}) => {
    return (
        <div className={`${backgroundColor} rounded-2xl px-2 pt-5 shadow-lg ${hours && hours.length > 0 && hours[hours.length - 1] !== hours[0] ? 'pb-10' : ''}`}>
            <div className="flex gap-3 items-center">
                <img
                    src={imagePath}
                    alt="personaje horario"
                    className='w-32 h-auto'
                />

                {/* Vertical Line */}
                <div className={`w-0.5 h-28 ${textColor.replace('text-', 'bg-')}`}></div>

                {/* Right Side - Schedule Text */}
                <div className="flex-1">
                    <div className="space-y-1">
                        <div className={`${textColor} font-bold text-xl`}>
                            {scheduleTitles.map((title, index) => (
                                <p key={index}>{title}</p>
                            ))}
                        </div>
                        <div className={`${textColor} font-bold text-2xl font-lemon`}>
                            {hours.map((hour, index) => (
                                <p key={index}>{hour}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorarioPanel;
