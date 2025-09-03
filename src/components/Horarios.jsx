import React from 'react';
import HorarioPanel from './HorarioPanel';
import ContactForm from './ContactForm';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { checkoutHandler } from '../utils/checkoutHandler';

const Horarios = () => {
    const horariosData = [
        {
            imagePath: "/img/TOUCH.png",
            scheduleTitles: ["LUNES Y MIÉRCOLES", "MARTES Y JUEVES"],
            hours: ["2:00 - 3:20 PM", "3:30 - 4:50 PM", "5:00 - 6:20 PM"],
            backgroundColor: "bg-gray-100",
            textColor: "text-[#001A70]"
        },
        {
            imagePath: "/img/LENTES-3.png",
            scheduleTitles: ["VIERNES"],
            hours: ["2:00 - 5:00 PM", "5:00 - 8:00 PM"],
            backgroundColor: "bg-[#001A70]",
            textColor: "text-white"
        },
        {
            imagePath: "/img/WONDER.png",
            scheduleTitles: ["SÁBADO"],
            hours: ["9:00 - 12:00 M", "2:00 - 5:00 PM"],
            backgroundColor: "bg-[#FFA400]",
            textColor: "text-white"
        }
    ];

    return (
        <>
            <div className="w-full flex justify-center items-center pt-10 min-[474px]:pt-20 min-[758px]:pt-32 relative z-20 md:-mt-20 2xl:-mt-40">
                <img src="/img/estrella3.webp" alt="estrella reloj" className="w-28 aspect-square min-[758px]:w-40 lg:w-64 2xl:w-72" />
                <div className="flex flex-col ">
                    <h2 className="text-[#001A70] text-4xl min-[758px]:text-6xl lg:text-8xl 2xl:text-9xl font-eastman-black ">Horarios <br />disponibles</h2>
                    <h3 className="text-lg min-[758px]:text-2xl lg:text-4xl 2xl:text-5xl text-[#FFA400] italic font-eastman-bold lg:mt-4">Año Escolar <span className="font-lemon font-bold">2025-2026</span></h3>
                </div>
            </div>
            <section className="w-full py-5 px-4 bg-white flex justify-center">
                <div className="w-[390px] lg:w-[850px] 2xl:w-[1300px]">
                    <div className="">
                        {horariosData.map((horario, index) => (
                            <div key={index} className={index !== 0 ? '-mt-7' : ''}>
                                <HorarioPanel
                                    imagePath={horario.imagePath}
                                    scheduleTitles={horario.scheduleTitles}
                                    hours={horario.hours}
                                    backgroundColor={horario.backgroundColor}
                                    textColor={horario.textColor}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='flex justify-center z-20 relative lg:py-10 2xl:py-10'>
                <button onClick={() => checkoutHandler()} className='cursor-pointer hover:scale-[102%] duration-300 z-10 text-white w-fit font-eastman-bold text-lg min-[385px]:text-xl lg:text-4xl 2xl:text-6xl px-4 py-2 rounded-lg bg-[#001A70]'>¡OBTÉN MÁS INFORMACIÓN! <BsFillLightningChargeFill className='text-3xl text-[#FFA400] inline-block ' /></button>
            </div>
            <div className='w-full bg-[#001A70] flex flex-col items-center -mt-10 '>
                <div className='w-full bg-white pt-20 rounded-b-[30px] -mt-1'></div>
            </div>
        </>
    );
};

export default Horarios;