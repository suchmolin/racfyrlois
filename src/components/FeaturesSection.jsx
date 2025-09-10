import { BsFillLightningChargeFill } from "react-icons/bs"
import { checkoutHandler } from "../utils/checkoutHandler"


function FeaturesSection() {
    return (
        <section className="relative w-full bg-[#eeeeef] rounded-b-[15%] lg:rounded-b-[10%] py-16 md:py-12 sm:py-8 2xl:py-28 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="w-[320px] min-[375px]:w-[370px] lg:w-[750px] 2xl:w-[1100px] mx-auto space-y-2  lg:space-y-5">

                    {/* Banner 1 - Azul oscuro */}
                    <div className="bg-[#001A70] rounded-2xl py-2  lg:py-4 2xl:py-8 px-2 text-white shadow-lg w-9/12 ml-auto">
                        <div className="flex items-center justify-end">
                            <div className="w-8/12 text-right">
                                <div className="text-[#FFA400] font-eastman-black text-2xl lg:text-6xl 2xl:text-7xl pr-4 italic leading-5">
                                    Adaptado <br /> a su edad
                                </div>

                            </div>
                            <div className="w-4/12 flex flex-col justify-center items-center pr-2">
                                <div className="text-3xl  lg:text-6xl  2xl:text-8xl font-lemon font-black text-nowrap">3-16</div>
                                <div className="text-2xl  lg:text-5xl 2xl:text-6xl font-eastman-black -mt-2 italic">años</div>
                            </div>
                        </div>
                    </div>

                    {/* Banner 2 - Verde lima */}
                    <div className="bg-[#97D700] rounded-2xl p-2  lg:p-4 2xl:p-6 text-white shadow-lg w-9/12 ml-auto relative">
                        <div className="flex items-center mx-4">
                            <div className="w-3/12 2xl:w-2/12 text-left">
                                <div className="text-7xl  lg:text-9xl  2xl:text-[150px] font-lemon font-black pr-4">3</div>
                            </div>
                            <div className="w-1/2 text-left">
                                <div className="text-2xl  lg:text-6xl 2xl:text-8xl leading-5 font-eastman-bold">lapsos</div>
                            </div>
                        </div>
                        <img src="/img/TOUCH.png" alt="personaje verde touch" className="absolute bottom-0 lg:-bottom-4 -left-[150px] min-[375px]:-left-[130px] lg:-left-[280px] 2xl:-left-[320px] w-[170px] lg:w-[320px]  2xl:w-[420px] h-auto" />
                    </div>

                    {/* Banner 3 - Azul oscuro */}
                    <div className="bg-[#001A70] rounded-2xl p-2  lg:p-4 2xl:p-6 text-white shadow-lg w-10/12 relative">
                        <div className="w-full flex items-center lg:-ml-5 2xl:-ml-24">
                            <div className="w-7/12 text-right">
                                <div className="text-7xl  lg:text-9xl 2xl:text-[150px] font-lemon lemon font-black pr-2">16</div>
                            </div>
                            <div className="w-3/12 text-left 2xl:ml-2">
                                <div className="text-xl  lg:text-5xl 2xl:text-6xl leading-5 font-eastman-bold">Horas mensuales</div>
                            </div>
                        </div>
                        <img src="/img/WONDER.png" alt="personaje naranja wonder" className="absolute bottom-0 lg:-bottom-4 left-[230px] min-[375px]:left-[260px] lg:left-[580px] 2xl:left-[790px] w-[170px] lg:w-[320px] 2xl:w-[420px] h-auto" />
                    </div>

                    {/* Banner 4 - Naranja */}
                    <div className="bg-[#FFA400] rounded-2xl p-2  lg:p-4 2xl:p-6 text-white shadow-lg">
                        <div className="flex items-center mx-4  2xl:-ml-36" >
                            <div className="w-1/2 text-right">
                                <div className="text-7xl  lg:text-9xl 2xl:text-[150px] font-lemon font-bold text-[#001A70] pr-2">48</div>
                            </div>
                            <div className="w-1/2 text-left">
                                <div className="text-2xl  lg:text-5xl  2xl:text-6xl leading-5 font-eastman-bold">Horas <br /> por lapso</div>
                            </div>
                        </div>
                    </div>

                    {/* Banner 5 - Rosado */}
                    <div className="bg-[#D60078] rounded-2xl p-2  lg:p-4 2xl:p-6 text-white shadow-lg">
                        <div className="flex items-center mx-4  2xl:-ml-36">
                            <div className="w-1/2 text-right">
                                <div className="text-7xl  lg:text-9xl 2xl:text-[150px] font-lemon font-bold text-[#001A70]  pr-2">8</div>
                            </div>
                            <div className="w-1/2 text-left">
                                <div className="text-2xl  lg:text-5xl  2xl:text-6xl leading-5 font-eastman-bold text-nowrap">Alumnos <br /> por grupo</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-[#eeeeef] rounded-b-[30px] pt-10 flex justify-center w-full">

                <button onClick={() => checkoutHandler()} className="cursor-pointer hover:scale-[102%] duration-300 z-10 w-fit rounded-md 2xl:rounded-lg text-2xl min-[500px]:text-3xl lg:text-5xl 2xl:text-6xl py-2 lg:py-2 px-4 lg:px-6 bg-white text-[#001A70] font-eastman-black italic -mb-10 flex items-center">¡INSCRÍBELO AHORA! <BsFillLightningChargeFill className='text-3xl lg:text-7xl text-[#FFA400] inline-block ml-3' /></button>
            </div>
        </section>
    )
}

export default FeaturesSection
